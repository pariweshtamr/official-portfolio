import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import { easeQuadInOut } from "d3-ease"
import "./circularProgressBar.scss"
const CircularProgressBar = ({ val }) => {
  return (
    <div className="circle-wrap">
      <CircularProgressbar
        value={val}
        text={`${val}%`}
        strokeWidth={7}
        styles={buildStyles({
          textSize: "22px",
          textColor: "#737371",
          pathColor: "#c5a269",
          trailColor: "#d9dfab",
          pathTransition: "none",
          strokeLinecap: "butt",
        })}
      />
    </div>
  )
}

export default CircularProgressBar
