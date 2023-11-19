import { useState } from "react"
import { produce } from "immer"

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ])

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)))
    // console.log(bugs.map((bug) => bug.fixed))

    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1)
        if (bug) {
          bug.fixed = true
        }
      })
    )
  }

  return (
    <>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title}
           {bug.fixed ? "fixed" : "not"}
        </p>
      ))}
      <button className="btn btn-primary" onClick={handleClick}>
        click
      </button>
    </>
  )
}

export default App
