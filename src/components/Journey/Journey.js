import { Col, Container, Row } from "react-bootstrap"
import { educationList, workList } from "../../constants"
import { AiFillCloseCircle } from "react-icons/ai"
import "./journey.scss"
import { useState } from "react"
import { motion } from "framer-motion"

const Journey = () => {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState()

  const handleOnClick = (img) => {
    setOpen(true)
    setImage(img)
  }
  return (
    <>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>
      <Container fluid className="journey-container">
        {open && (
          <div className="image-viewer">
            <AiFillCloseCircle
              className="close-image-viewer"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="image-wrapper"
            >
              <img src={image} alt="" />
            </motion.div>
          </div>
        )}
        <Row>
          <div className="all-title">
            <h4>
              My<span> Journey</span>
              <p>The Odyssey of a full-stack developer</p>
            </h4>
          </div>
        </Row>

        <Row className="journey-main">
          <Col lg={6} md={12} className="education-col">
            <div className="journey-main-title">
              <h5>Education</h5>
            </div>
            <div className="journey-list ">
              {educationList?.map((education, i) => (
                <div className="journey-timeline-item" key={i}>
                  <div className="journey-timeline-mark"></div>
                  <div className="journey-timeline-mark-light"></div>
                  <div className="journey-item">
                    <div className="journey-item-header">
                      <div className="journey-title">
                        <h5>{education.title}</h5>
                        <p>
                          <i>{education.course}</i>
                        </p>
                      </div>
                      <div className="journey-date">
                        <p>{education.date}</p>
                      </div>
                    </div>

                    <p>{education.desc}</p>

                    <div
                      className="journey-link"
                      onClick={() => handleOnClick(education.img)}
                    >
                      certification
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} md={12} className="history-col">
            <div className="journey-main-title">
              <h5>Work History</h5>
            </div>
            <div className="journey-list ">
              {workList?.map((work, i) => (
                <div className="journey-timeline-item" key={i}>
                  <div className="journey-timeline-mark"></div>
                  <div className="journey-timeline-mark-light"></div>
                  <div className="journey-item">
                    <div className="journey-item-header">
                      <div className="journey-title">
                        <h5>{work.title}</h5>
                        <p>
                          <i>{work.role}</i>
                        </p>
                      </div>
                      <div className="journey-date">
                        <p>{work.date}</p>
                      </div>
                    </div>
                    <ul>
                      {work?.desc?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Journey
