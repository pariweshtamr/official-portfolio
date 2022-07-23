import "./work.scss"
import { motion } from "framer-motion"
import { useState } from "react"
import { projects } from "../../constants"
import { AiFillEye, AiFillGithub } from "react-icons/ai"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 })
  const [filterWork, setFilterWork] = useState(projects)

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opactiy: 1 }])

      if (item === "All") {
        setFilterWork(projects)
      } else {
        setFilterWork(projects.filter((project) => project.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <div id="work" className="works">
      <h2 className="head-text app-flex mt-5">
        My Creative<span>Portfolio</span>
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
      >
        {filterWork.map((work, i) => (
          <div className="work-item app-flex" key={i}>
            <div className="work-img app-flex">
              <img src={work.image} alt={work.title} />

              <motion.div
                whileHover={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="work-img-links app-flex"
              >
                <a href={work.visit} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app-flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.source} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app-flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="work-content app-flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>

              <div className="work-tag app-flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Work
