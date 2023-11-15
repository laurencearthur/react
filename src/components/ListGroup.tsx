import { useState } from "react"

function ListGroup() {
  let items = ["London", "Tokyo", "Paris", "New York", "Spain"]
  const [selectedIndex, setselectedIndex] = useState(-1)

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
