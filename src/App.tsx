import axios from 'axios';
import { CurrencyDollarSimple, GithubLogo, Lightbulb, Money, PaintRoller, Receipt } from 'phosphor-react';
import { useEffect, useState } from 'react'
import './App.css'
import AdditionalInfo from './components/AdditionalInfo';
import Button from './components/Button';
import Card from './components/Card';
import ValueData from './components/ValueData';
import { ExpenseDTO } from './types/expenseDTO';
import { IncomeDTO } from './types/incomeDTO';
import { MonthDTO } from './types/monthDTO';

export default function App() {

  const [incomes, setIncomes] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [month, setMonth] = useState<MonthDTO>({
    month: 0,
    year: 0,
  })
  const [incomesDetails, setIncomesDetails] = useState<IncomeDTO[]>([]);
  const [expensesDetails, setExpensesDetails] = useState<ExpenseDTO[]>([]);
  
  // React On Init
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if(theme === "dark") document.body.classList.add("dark");

    async function fetchData() {
      await axios.get('http://localhost:3030/load')
      .then((res) => { 
        setMonth(res.data as MonthDTO);
        console.log(res.data);

        const incomesSum = (res.data as MonthDTO).incomes?.reduce((p, n) => {return p + n.value}, 0);
        const expensesSum = (res.data as MonthDTO).expenses?.reduce((p, n) => {return p + n.value}, 0);
        if(expensesSum) setExpenses(expensesSum);
        if(incomesSum) setIncomes(incomesSum);
      })
      .catch((err) => { console.error(err.message) });
    } fetchData();
  }, [])

  function switchTheme() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }

  function navigateGithub() {
    const a = document.createElement("a");
    a.setAttribute("href", "https://github.com/diogozdev");
    a.setAttribute("target", "_blank");
    a.click();
  }

  return (
    <div className='wrapper gap-3 h-full'>
      <div className='h-full grid-2 gap-3'>
      <div className="card text rounded-2 pad-3 h-full col-2">Gráfico</div>
        
        <Card>
          <ValueData
            title='Entradas'
            color='text-positive'
            value={incomes}
          >
            <Money size={22}/>
          </ValueData>
        </Card>
        
        <Card>
          <ValueData
            title='Saídas'
            color='text-negative'
            value={expenses}
          >
            <Receipt size={22}/>
          </ValueData>
        </Card>

      </div>
      <div className='flex-col gap-2'>
        <h1 className='text center font-xl'>Money Matters</h1>
        <div className='grid-3 gap-2'>
          <Button action={switchTheme}><Lightbulb size={24}/></Button>

          <Button></Button>

          <Button hint="Github" action={navigateGithub}><GithubLogo size={24}/></Button>
        </div>
        <Card>
          <AdditionalInfo
            incomes={ month.incomes || []}
            expenses={ month.expenses || []}
          ></AdditionalInfo>
        </Card>
      </div>
    </div>
  )
}
