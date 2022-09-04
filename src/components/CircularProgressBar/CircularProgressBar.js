import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import ProgressProvider from "./ProgressProvider"
import "./circularProgressBar.scss"
import { useState } from "react"
import { useSelector } from "react-redux"
const CircularProgressBar = ({ val }) => {
  const [valueEnd, setValueEnd] = useState(val)
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className="circle-wrap">
      <Animate>
        {darkMode ? (
          <ProgressProvider valueStart={0} valueEnd={valueEnd}>
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                strokeWidth={7}
                styles={buildStyles({
                  textSize: "22px",
                  textColor: "#8c8c8e",
                  pathColor: "#ffc107",
                  trailColor: "#191923",
                  strokeLinecap: "butt",
                  pathTransitionDuration: 2.5,
                })}
              />
            )}
          </ProgressProvider>
        ) : (
          <ProgressProvider valueStart={0} valueEnd={valueEnd}>
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${value}%`}
                strokeWidth={7}
                styles={buildStyles({
                  textSize: "22px",
                  textColor: "#737371",
                  pathColor: "#c5a269",
                  trailColor: "#d9dfab",
                  strokeLinecap: "butt",
                  pathTransitionDuration: 2.5,
                })}
              />
            )}
          </ProgressProvider>
        )}
      </Animate>
    </div>
  )
}

function Animate({ children }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default CircularProgressBar
