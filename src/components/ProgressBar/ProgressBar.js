import "./progressBar.scss"
const ProgressBar = ({ width, text }) => {
  return (
    <div className="progressBar">
      <div className="bar">
        <div className="percent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
          </svg>
        </div>
        <p>{text}</p>
        <div className="progress">
          <span style={{ width: width }}></span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
