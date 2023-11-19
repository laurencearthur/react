import { useState } from "react"

const App = () => {
  const [tags, setTags] = useState(["happy", "cheerful"])

  const handleClick = () => {
    //Add
    // setTags([...tags, "sad"])
    // console.log(tags)

    //remove
    // setTags(tags.filter((tag) => tag != "happy"))
    // console.log(tags)

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)))
  }

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>
        click
      </button>
    </>
  )
}

export default App
