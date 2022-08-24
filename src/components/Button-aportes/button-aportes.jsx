import './style.css'
const ButtonAportes = (props) =>{
  return (
    <button {...props} className="button-aportes">
    {props.children}
  </button>
  )
}
export default ButtonAportes;