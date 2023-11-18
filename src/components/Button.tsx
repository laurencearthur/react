import Alert from "./Alert"

interface Prop {
  children: string
  color: 'primary' | 'secondary' | 'danger' | 'warning'
  onClick: () => void
}



const Button = ({ children, color,onClick }: Prop) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
