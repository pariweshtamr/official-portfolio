import { Col, Container, Row } from "react-bootstrap"
import { educationList, workList } from "../../constants"
import { Helmet } from "react-helmet-async"

import "./journey.scss"

const Journey = () => {
  return (
    <>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>
      <Container className="journey-container">
        <Row>
          <div className="all-title">
            <h4>
              My <span>Journey</span>
            </h4>
          </div>
        </Row>

        <Row className="journey-main">
          <Col md={6} className="education-col">
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

                    <a className="journey-link">certification</a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={6} className="history-col">
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
                    <p>{work.desc}</p>
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
