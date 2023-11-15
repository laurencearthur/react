import { MouseEvent } from "react"

function ListGroup() {
  let items = ["London", "Tokyo", "Paris", "New York", "Spain"]
  const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
