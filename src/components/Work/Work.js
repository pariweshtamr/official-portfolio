import "./work.scss"
import { motion } from "framer-motion"
import { useState } from "react"
import { projects } from "../../constants"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { Container, Row } from "react-bootstrap"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 })
  const [filterWork, setFilterWork] = useState(projects)

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opactiy: 1 }])

      if (item === "ALL") {
        setFilterWork(projects)
      } else {
        setFilterWork(projects.filter((project) => project.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <Container className="work-container">
      <div className="work-header">
        <div className="all-title">
          <h5>
            My Creative <span>Portfolio</span>
          </h5>
        </div>

        <div className="work-filter">
          {["ALL", "HTML/CSS", "JAVASCRIPT", "REACT JS", "FULL-STACK"].map(
            (item, i) => (
              <div
                className={`work-filter-item ${
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
            </div>

            <div className="work-item-description">
              <div>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
              </div>
              <div className="work-item-links">
                <a href={work.visit} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.source} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </div>
            </div>

            {/* <div className="work-content app-flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>

              <div className="work-tag app-flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div> */}
          </div>
        ))}
      </motion.div>
    </Container>
  )
}

export default Work
