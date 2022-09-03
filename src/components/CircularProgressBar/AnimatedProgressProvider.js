import { useEffect } from "react"
import { useState } from "react"
import { Animate } from "react-move"

const AnimatedProgressProvider = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setIsAnimated(true)
    }, duration * 1000)
  }, [duration])
  return (
    <Animate
      show
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueStart : valueEnd],
        timing: {
          duration: duration * 1000,
          ease: easingFunction,
        },
      })}
    >
      {({ value }) => console.log(value)}
    </Animate>
  )
}

export default AnimatedProgressProvider
