import { useState } from 'react'
import './App.css'

export default function App() {

  return (
    <div className="w-full h-full grid-3 gap-4 pad-2">
      <div className="card rounded-2 pad-3 h-full text col-2">Gráfico</div>
      <div className="card rounded-2 pad-3 h-full row-2">Resumo</div>
      <div className="card rounded-2 pad-3 h-full">
        <h2>Entradas / Incomes</h2>
        <div className='w-full h-full center font-xxl'>0000</div>
      </div>
      <div className="card rounded-2 pad-3 h-full">
        <h2>Despesas / Expenses</h2>
        <div className='w-full h-full center font-xxl'>0000</div>
      </div>
    </div>
  )
}
