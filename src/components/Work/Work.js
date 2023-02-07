import "./work.scss"
import { motion } from "framer-motion"
import { useState } from "react"
import { AiFillEye, AiFillGithub } from "react-icons/ai"
import { MdZoomOutMap } from "react-icons/md"
import { Container } from "react-bootstrap"
import { AiFillCloseCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("ALL")
  const [animateCard, setAnimateCard] = useState({ y: 0, opactiy: 1 })
  const [openImg, setOpenImg] = useState(false)
  const [image, setImage] = useState()
  const { projects } = useSelector((state) => state.project)
  const [filterWork, setFilterWork] = useState(projects)

  const handleOnZoom = (img) => {
    setOpenImg(true)
    setImage(img)
  }

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
    <>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>
      <Container fluid className="work-container">
        {openImg && (
          <div className="image-viewer">
            <AiFillCloseCircle
              className="close-image-viewer"
              onClick={() => setOpenImg(false)}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="image-wrapper"
            >
              <img src={image} alt="project-img" />
            </motion.div>
          </div>
        )}
        <div className="work-header">
          <div className="all-title">
            <h4>
              My Creative <span>Portfolio</span>
            </h4>
          </div>

          <div className="work-filter">
            {["ALL", "JAVASCRIPT", "REACT JS", "NEXT JS", "MERN"].map(
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
            <div className="work-item" key={i}>
              <div className="work-img">
                <div className="zoom-icon-container">
                  <MdZoomOutMap onClick={() => handleOnZoom(work.image)} />
                </div>
                <img src={work.image} alt={work.title} />
              </div>

              <div className="work-item-description">
                <div className="work-item-title">
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                </div>
                <div className="work-item-links">
                  <div className="external-links">
                    {work.visit && (
                      <a
                        href={work.visit}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          whileHover={{ scale: [1, 1.1] }}
                          transition={{ duration: 0.25 }}
                          className="icon"
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>
                    )}

                    <a
                      href={work.source}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        whileHover={{ scale: [1, 1.1] }}
                        transition={{ duration: 0.25 }}
                        className="icon"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </div>

                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    whileHover={{ scale: [1, 1.1] }}
                    transition={{ duration: 0.25 }}
                    className="details"
                  >
                    <Link to={`/portfolio/${work.id}`} className="detail">
                      Details
                    </Link>
                  </motion.div>
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
    </>
  )
}

export default Work
