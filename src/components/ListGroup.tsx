function ListGroup() {
  const items = ["London", "Tokyo", "Paris", "New York", "Spain"]

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
