import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"
import { GoCopilot } from "react-icons/go"

function App() {
  const [AlertMsg, setAlertMsg] = useState(false)
  return (
    <>
      {AlertMsg && <Alert onClose={() => setAlertMsg(false)}>my alert</Alert>}
      <GoCopilot size={100} color="#BE3144" />
      <br/>
      <Button color="danger" onClick={() => setAlertMsg(true)}>
        my button
      </Button>
    </>
  )
}

export default App
