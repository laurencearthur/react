import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"

function App() {
  const [AlertMsg, setAlertMsg] = useState(false)
  return (
    <>
      {AlertMsg && <Alert onClose={() => setAlertMsg(false)}>my alert</Alert>}
      <Button color="danger" onClick={() => setAlertMsg(true)}>
        my button
      </Button>
    </>
  )
}

export default App
