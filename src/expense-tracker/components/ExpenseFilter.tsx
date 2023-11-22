import { categories } from "../../App"

interface Props {
  onSelectCategory: (category: string) => void
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map(cat => <option key={cat} id="cat">{cat}</option>)}
      </select>
    </>
  )
}

export default ExpenseFilter
