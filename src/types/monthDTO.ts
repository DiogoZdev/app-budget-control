import { ExpenseDTO } from "./expenseDTO"
import { IncomeDTO } from "./incomeDTO"

export type MonthDTO = {
  id?: number
  month: number,
  year: number,
  expenses?: ExpenseDTO[],
  incomes?: IncomeDTO[],
}