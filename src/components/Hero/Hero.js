import "./hero.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import { Col, Container, Row } from "react-bootstrap"

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
    <Container>
      <Row>
        <Col md={6}></Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  )
}

export default Hero
