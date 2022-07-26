import "./timeline.scss"

const TimelineContent = ({ year, title, subTitle, text }) => {
  return (
    <div className="timeline-contents">
      <div className="timeline-left-content">
        <p>{year}</p>
      </div>

      <div className="timeline-right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TimelineContent
