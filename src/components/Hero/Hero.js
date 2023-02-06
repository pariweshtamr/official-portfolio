import "./hero.scss"
import { images } from "../../constants"
import { Col, Container, Row } from "react-bootstrap"
import { TypeAnimation } from "react-type-animation"
import { FaAward, FaProjectDiagram, FaUserGraduate } from "react-icons/fa"
import Services from "../Services/Services"
import { useNavigate } from "react-router-dom"
import Mern from "../Mern/Mern"
import { useDispatch } from "react-redux"
import { onTabChange } from "../../redux/ActiveTab/TabSlice"

const Hero = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleOnClick = () => {
    dispatch(onTabChange("/contact"))
    navigate("/contact")
  }
  return (
    <>
      <Container fluid className="hero-container">
        <Row className="hero-row">
          <Col lg={12}>
            <div className="hero-banner">
              <div className="hero-banner-back"></div>
              <div className="hero-banner-overlay">
                <Col xxl={8} lg={12} md={12} sm={12}>
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
                            "Enthusiastic Developer",
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
                  <FaUserGraduate />
                </div>
                <span>
                  <h6>Information Technology</h6>
                  <p>Graduate</p>
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
