import axios from "axios"
import { useEffect, useState } from "react"

interface User {
  id: number
  name: string
}
const App = () => {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
  }, [])
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
