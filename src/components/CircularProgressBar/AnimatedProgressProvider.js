import { useEffect } from "react"
import { useState } from "react"
import { Animate } from "react-move"

const AnimatedProgressProvider = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
  children,
}) => {
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setIsAnimated(true)
    })
  }, [duration])
  return (
    <Animate
      show
      start={() => ({
        value: valueStart,
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
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
