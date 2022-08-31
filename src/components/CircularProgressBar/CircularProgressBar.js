import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import { easeQuadInOut } from "d3-ease"

import "./circularProgressBar.scss"
const CircularProgressBar = ({ val }) => {
  return (
    <div className="circle-wrap">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={val}
        duration={1.4}
        easingFunction={easeQuadInOut}
      >
        {(value) => {
          const roundedValue = Math.round(value)
          return (
            <CircularProgressbar
              value={roundedValue}
              text={`${roundedValue}%`}
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
          )
        }}
      </AnimatedProgressProvider>
    </div>
  )
}

export default CircularProgressBar
