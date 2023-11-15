function ListGroup() {
  let items = ["London", "Tokyo", "Paris", "New York", "Spain"]

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? "No items found" : null} */}
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
