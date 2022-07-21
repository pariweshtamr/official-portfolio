import "./work.scss"
import { motion } from "framer-motion"
import { useState } from "react"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 })
  const handleWorkFilter = (item) => {}
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>

      <div className="work-filter">
        {["HTML/CSS", "JavaScript", "React JS", "Full-Stack", "All"].map(
          (item, i) => (
            <div
              className={`work-filter-item app-flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
              key={i}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work-portfolio"
      ></motion.div>
    </>
  )
}

export default Work
