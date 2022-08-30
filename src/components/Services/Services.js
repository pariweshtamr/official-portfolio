import { Col, Container, Row } from "react-bootstrap"
import "./services.scss"

const Services = () => {
  return (
    <Container className="service-container">
      <Row className="service-title">
        <h5>What I Offer</h5>
      </Row>

      <Row className="service-cards">
        <div className="service">
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="service-card-content">
              <h6>Web Development</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                sapiente.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="service-card-content">
              <h6>UI/UX Design</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                sapiente.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="service-card-content">
              <h6>E-Commerce Development</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                sapiente.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="service-card-content">
              <h6>Custom CMS Development</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                sapiente.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="service-card-content">
              <h6>Web Development</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                sapiente.
              </p>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Services
