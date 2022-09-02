import { Col, Container, Row } from "react-bootstrap"
import "./journey.scss"

const Journey = () => {
  return (
    <Container className="journey-container">
      <Row>
        <div className="all-title">
          <h5>
            My <span>Journey</span>
          </h5>
        </div>
      </Row>

      <Row className="journey-main">
        <Col md={6} className="education-col">
          <div className="journey-main-title">
            <h5>Education</h5>
          </div>

          <div className="journey-list ">
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Dented Code Academy</h5>
                    <p>
                      <i>Student</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>aug 2021 - jan 2022</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Victoria University</h5>
                    <p>
                      <i>Student</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>aug 2021 - jan 2022</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Dented Code Academy</h5>
                    <p>
                      <i>Student</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>aug 2021 - jan 2022</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className="history-col">
          <div className="journey-main-title">
            <h5>Work History</h5>
          </div>

          <div className="journey-list ">
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Rebb Tech</h5>
                    <p>
                      <i>Full Stack Developer</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>may 2022 - present</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Aldi Australia</h5>
                    <p>
                      <i>Deputy Manager</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>aug 2018 - Present</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
            <div className="journey-timeline-item">
              <div className="journey-timeline-mark"></div>
              <div className="journey-timeline-mark-light"></div>
              <div className="journey-item">
                <div className="journey-item-header">
                  <div className="journey-title">
                    <h5>Aldi Australia</h5>
                    <p>
                      <i>Store Assistant</i>
                    </p>
                  </div>
                  <div className="journey-date">
                    <p>march 2015 - aug 2018</p>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat officiis id libero nostrum soluta voluptatibus
                  inventore ab voluptate enim. Iste!
                </p>

                <a className="journey-link">certification</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Journey
