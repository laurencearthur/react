import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "qwerty" },
    { id: 2, description: "bbb", amount: 10, category: "qwerty" },
    { id: 3, description: "ccc", amount: 10, category: "qwerty" },
    { id: 4, description: "xxx", amount: 10, category: "qwerty" },
  ])
  if (expenses.length === 0) {
    return null
  }
  return (
    <>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </>
  )
}

export default App
