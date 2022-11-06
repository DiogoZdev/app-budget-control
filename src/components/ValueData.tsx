import { ReactNode } from "react"

type ValueDataProps = {
  color: string,
  title: string,
  value: number,
  children?: ReactNode,
}

export default function ValueData(p: ValueDataProps) {
    return(
      <>
        <div className="flex-row gap-2 text">
          <span className={p.color}>{ p.children }</span><h2 className="font-lg">{p.title}</h2>
        </div>
        <div className='w-full h-full center font-x2'><span className={p.color}>$ {p.value.toFixed(2)}</span></div>
      </>
    )
}