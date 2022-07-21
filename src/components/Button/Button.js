const Button = ({ value, styleClass, onClick }) => {
  return (
    <button className={`btn ${styleClass}`} onClick={(e) => onClick(e)}>
      {value}
    </button>
  )
}

export default Button
