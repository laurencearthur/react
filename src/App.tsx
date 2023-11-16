import ListGroup from "./components/ListGroup"

function App() {
  let items = ["London", "Tokyo", "Paris", "New York", "Spain"]
  const handleSelectedItem = (item: string) =>{
    console.log(item);
    
  }
  return (
    <>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectedItem}/>
    </>
  )
}

export default App
