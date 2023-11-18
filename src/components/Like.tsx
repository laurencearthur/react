import { AiFillHeart } from "react-icons/ai";
import { useState } from "react"

interface Props {
  onClick: () => void
}

const Like = ({ onClick }: Props) => {
  const [like, setlike] = useState(true)

  const clicked = () => {
    setlike(!like)
    onClick()
  }
  if (like) {
    return <AiFillHeart size={30} type="button" onClick={clicked} />
  }
  return (
    <>
      {like === false && (
        <AiFillHeart size={30} color="red" onClick={clicked} />
      )}
    </>
  )
}

export default Like
