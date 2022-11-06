import { Trash } from "phosphor-react"
import { ExpenseDTO } from "../types/expenseDTO"

type ExpensesDetailsProps = {
  expenses: ExpenseDTO[],
}

export default function ExpensesDetails(p: ExpensesDetailsProps) {
  return(
    <div className="w-full flex-col pad-3 gap-2">
      {p.expenses.map((e) => {
        return <div className="list-item" key={e.id}>
          <div className="list-data text">
            <div>{e.name}</div>
            <div><span className="text-negative">R$ {e.value.toFixed(2)}</span></div>
          </div>
          <div className="list-buttons">
          <Trash className="text-negative bg pad-1 rounded-2 pointer" size={38}/>
          </div>
        </div>
      })}
    </div>
  )
}