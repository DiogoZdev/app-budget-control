import { Children, ReactNode } from "react"

type CardProps = {
  children: ReactNode,
}

export default function CardData(p: CardProps) {
  return(
    <div className="card rounded-2 pad-3 w-full h-full flex-col">
      { p.children }
    </div>
  )
}