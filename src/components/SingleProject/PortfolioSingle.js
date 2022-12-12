import { Col, Container, Row } from "react-bootstrap"
import "./portfolioSingle.scss"

const PortfolioSingle = () => {
  return (
    <>
      {/* <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div> */}
      <Container fluid className="single-project-container">
        <Row className="p-5">
          <Col lg={12}>
            <div className="project-section-title">
              <div className="title-frame">
                <h4>Project title</h4>
              </div>

              <div className="title-right">
                <div className="category">Full-Stack</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PortfolioSingle
