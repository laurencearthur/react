import { useState } from "react"

const App = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "product 1", quantity: 1 },
      { id: 2, title: "product 2", quantity: 1 },
    ],
  })

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item, quantity: 1 }
      ),
    })
    console.log(cart.items.map((item) => item.quantity))
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
