import { ReactNode } from "react"

type ButtonProps = {
  text?: string,
  hint?: string,
  children?: ReactNode,
  action?: () => void,
}

export default function Button(p: ButtonProps) {
  return (
    <button className="card pad-2 rounded-2 no-border text" onClick={p.action} title={p.hint}>
      { p.children }
      { p.text ?? <span>{ p.text }</span> }
    </button>
  )
}