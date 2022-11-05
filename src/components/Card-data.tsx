import { ReactNode } from "react"

type CardDataProps = {
  title: string,
  value: number,
  color: string,
  children?: ReactNode,
}

export default function CardData(p: CardDataProps) {
  return(
    <div className="card rounded-2 pad-3 h-full flex-col">
      <div className="flex-row gap-2 text">
        <span className={p.color}>{ p.children }</span><h2 className="font-lg">{p.title}</h2>
      </div>
      <div className='w-full h-full center font-x2'><span className={p.color}>$ {p.value.toFixed(2)}</span></div>
    </div>
  )
}