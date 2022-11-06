import { Trash } from "phosphor-react"
import { IncomeDTO } from "../types/incomeDTO"

type IncomesDetailsProps = {
  incomes: IncomeDTO[],
}

export default function IncomesDetails(p: IncomesDetailsProps) {
  return(
    <div className="w-full flex-col pad-3 gap-2">
      {p.incomes.map((i) => {
        return <div className="list-item" key={i.id}>
          <div className="list-data text">
            <div>{i.name}</div>
            <div><span className="text-positive">R$ {i.value.toFixed(2)}</span></div>
          </div>
          <div className="list-buttons">
            <Trash className="text-negative bg pad-1 rounded-2 pointer" size={38}/>
          </div>
        </div>
      })}
    </div>
  )
}