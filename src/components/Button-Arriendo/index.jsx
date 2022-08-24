import './style.css'
const ButtonArriendos = (props) =>{
  return (
    <button {...props} className="button-arriendo">
    {props.children}
  </button>
  )
}
export default ButtonArriendos;