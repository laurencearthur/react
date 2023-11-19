import { useState } from "react"

const App = () => {
  const [pizza, setPizza] = useState({
    name: "spicy mac",
    toppings: ["mushroom"],
  })

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] })
    console.log(pizza.toppings)
  }

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        click
      </button>
    </>
  )
}

export default App
