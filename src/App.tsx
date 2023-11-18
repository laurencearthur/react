import { useState } from "react"

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  })

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } })
    console.log("clicked");
    
  }

  return (
    <>
      <button className="btn btn-primary" onClick={handleClick}>{game.player.name}</button>
    </>
  )
}

export default App
