import { Container, Row } from "react-bootstrap"
import servicesList from "../../constants/servicesData"
import "./services.scss"

const Services = () => {
  return (
    <Container className="service-container">
      <Row className="all-title">
        <h4>
          What <span> I Offer</span>
        </h4>
      </Row>

      <Row className="service-cards">
        <div className="service">
          {servicesList?.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">
                <i className={s.icon}></i>
              </div>
              <div className="service-card-content">
                <h6>{s.title}</h6>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  )
}

export default Services
