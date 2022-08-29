const ProgressBar = ({ title, width, text }) => {
  return (
    <div className="progress-bar-container">
      <div className="hard-skill-header">
        <h6>{title}</h6>
      </div>
      <div className="hard-skill-progress">
        <div className="progress" style={{ width: width }}>
          <span style={{ width: width }}></span>
        </div>
        <p className="progress-text">{text}</p>
      </div>
    </div>
  )
}

export default ProgressBar
