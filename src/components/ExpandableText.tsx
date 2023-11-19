import { useState } from "react"

interface Prop {
  children: string
  maxChars?: number
}

const ExpandableText = ({ children, maxChars = 100 }: Prop) => {
  const [more, setMore] = useState(false)
  if (children.length <= maxChars) {
    return <p>{children}</p>
  }

  const text = more ? children : children.substring(0, maxChars)

  return (
    <p>
      {text}...{" "}
      <button className="btn btn-primary" onClick={() => setMore(!more)}>
        {more ? "less" : "more"}
      </button>{" "}
    </p>
  )
}

export default ExpandableText
