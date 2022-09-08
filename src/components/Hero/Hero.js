import "./hero.scss"
import { images } from "../../constants"
import { Col, Container, Row } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation"
import { FaAward, FaProjectDiagram } from "react-icons/fa"
import Services from "../Services/Services"
import { useNavigate } from "react-router-dom"
import Mern from "../Mern/Mern"
import { Helmet } from "react-helmet-async"

const Hero = () => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate("/contact")
  }
  return (
    <>
      <Helmet>
        <title>Pariwesh Home</title>
        <link rel="canonical" href={process.env.REACT_APP_URL} />
        <meta name="" value="" />
      </Helmet>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>

      <Container fluid className="hero-container">
        <Row className="hero-row">
          <Col lg={12}>
            <div className="hero-banner">
              <div className="hero-banner-back"></div>
              <div className="hero-banner-overlay">
                <Col lg={8} md={12} sm={12}>
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
                            "Blogger",
                            1000,
                          ]}
                          repeat={Infinity}
                          className="type-animation"
                        />
                      </span>
                    </div>
                    <button onClick={handleOnClick}>Let's Talk</button>
                  </div>
                </Col>
                <Col lg={4}>
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
                  <FaAward />
                </div>
                <span>
                  <h6>1 Year Job</h6>
                  <p>Experience</p>
                </span>
              </div>
              <div className="hero-info-divider"></div>
              <div>
                <div className="info-item-container">
                  <FaProjectDiagram />
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
                  <h6>1 Year Job</h6>
                  <p>Experience</p>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Services />
      <Mern />
    </>
  )
}

export default Hero
