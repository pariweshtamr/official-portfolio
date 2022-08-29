import "./hero.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import { Col, Container, Row } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
}
const Hero = () => {
  return (
    <>
      <div className="hero-top-bg">
        <div className="top-bg-overlay"></div>
      </div>

      <Container fluid className="hero-container">
        <Row className="hero-row">
          <Col lg={12}>
            <div className="hero-banner">
              <div className="hero-banner-back"></div>
              <div className="hero-banner-overlay">
                <Col md={8}>
                  <div className="banner-title">
                    <h1>
                      Hi! I am
                      <br />
                      Pariwesh Tamrakar
                    </h1>

                    <div>
                      <span>
                        <TypeAnimation
                          cursor={true}
                          sequence={[
                            "Web-Developer",
                            1000,
                            "Full-Stack Developer",
                            1000,
                          ]}
                          repeat={Infinity}
                          className="type-animation"
                        />
                      </span>
                    </div>
                    <button>Let's Talk</button>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="hero-img">
                    <img src={images.dev} alt="" />
                  </div>
                </Col>
              </div>
            </div>
          </Col>

          <div className="hero-info-container">
            <div className="hero-info-content">
              <div>
                <div className="info-item-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h6>1 Year Job</h6>
                  <p>Experience</p>
                </span>
              </div>
              <div className="hero-info-divider"></div>
              <div>
                <div className="info-item-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h6>10+ Projects</h6>
                  <p>Completed</p>
                </span>
              </div>
              <div className="hero-info-divider"></div>

              <div>
                <div className="info-item-container">
                  <i className="fa-solid fa-award"></i>
                </div>
                <span>
                  <h6></h6>
                  <p>Experience</p>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Hero
