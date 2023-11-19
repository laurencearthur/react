import { useState } from "react"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"

const App = () => {
  const [cartItems, setCartItems] = useState([
    "mobile case",
    "hair dryer",
    "note",
  ])
  return (
    <>
      <NavBar cartItemsCount={cartItems.length}  />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}  />
    </>
  )
}

export default App
