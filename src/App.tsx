import { useState } from "react"
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"
import categories from "./expense-tracker/components/categories"
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Food for picnic",
      amount: 20,
      category: "Groceries",
    },
    { id: 2, description: "Mobile", amount: 20, category: "Utilities" },
    { id: 3, description: "Movies", amount: 10, category: "Entertainment" },
    { id: 4, description: "Mall", amount: 19, category: "Entertainment" },
  ])
  const [selectedCategory, setSelectedCategory] = useState("")

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses
  if (expenses.length === 0) {
    return null
  }
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </>
  )
}

export default App
