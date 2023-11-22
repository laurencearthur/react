import categories from "./categories"
import { z } from "Zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should atleast 3 characters" })
    .max(100),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_0000),
  categories: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
})
type ExpenseFormData = z.infer<typeof schema>
const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amout
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((cat) => (
              <option key={cat} id="cat">
                {cat}
              </option>
            ))}
          </select>
          {errors.categories && (
            <p className="text-danger">{errors.categories.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default ExpenseForm