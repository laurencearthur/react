import ListGroup from "./components/ListGroup"

function App() {
  let items = ["London", "Tokyo", "Paris", "New York", "Spain"]

  return (
    <>
      <ListGroup items={items} heading="Cities" />
    </>
  )
}

export default App
