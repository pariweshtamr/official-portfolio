import { Container } from "react-bootstrap"
import "./footer.scss"

const Footer = () => {
  return (
    <Container fluid className="footer">
      <div className="footer-content">
        <p>&copy; 2023 | Pariwesh Tamrakar</p>
        <p>Design inspired by Nazar Miller</p>
      </div>
    </Container>
  )
}

export default Footer
