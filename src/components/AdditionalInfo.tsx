import { useState } from "react";
import { ExpenseDTO } from "../types/expenseDTO";
import { IncomeDTO } from "../types/incomeDTO";

import './components.scss';
import ExpensesDetails from "./ExpensesDetails";
import IncomesDetails from "./IncomesDetails";

type AdditionalInfoProps = {
  incomes: IncomeDTO[],
  expenses: ExpenseDTO[],
}

export default function AdditionalInfo(p:AdditionalInfoProps) {

  const [selection, setSelection] = useState<string>("incomes");

  return(
    <>
      <div className="selector font-2x">
        <button className={selection === 'incomes' ? "button-active text-positive" : "text" } onClick={() => setSelection('incomes')}>Entradas</button>
        <button className={selection === 'expenses' ? "button-active text-negative" : "text" } onClick={() => setSelection('expenses')}>Saídas</button>
        <button className={selection === 'notes' ? "button-active text-warn" : "text" } onClick={() => setSelection('notes')}>Notas</button>
      </div>
      {selection == "incomes" && <IncomesDetails incomes={p.incomes}></IncomesDetails>}
      {selection == "expenses" && <ExpensesDetails expenses={p.expenses}></ExpensesDetails>}
    </>
  )

}