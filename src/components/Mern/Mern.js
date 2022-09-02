import { Container, Row } from "react-bootstrap"
import { images } from "../../constants"

import "./mern.scss"

const Mern = () => {
  return (
    <Container className="mern-container">
      <Row className="all-title text-center">
        <h5>
          MERN <span> Stack Development</span>
        </h5>
        <p>
          MERN stands for MongoDB, Express, React, Node, after the four key
          technologies that make up the stack.
        </p>
      </Row>

      <Row className="mern-circles">
        {[images.mongo, images.express, images.react, images.node].map(
          (circle, i) => (
            <div className="circle" key={`circle-${i}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </Row>
    </Container>
  )
}

export default Mern
