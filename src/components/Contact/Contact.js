import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import "./contact.scss"
import { FaUser } from "react-icons/fa"
import { MdAttachEmail, MdMessage } from "react-icons/md"
import { Container, Row } from "react-bootstrap"
import { Helmet } from "react-helmet-async"

const Contact = () => {
  const [loading, setLoading] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    const sendEmail = emailjs.sendForm(
      "service_milmbd7",
      "template_hkz6ugs",
      form.current,
      "user_crInatugY1fckdnkfRcc9"
    )

    e.target.reset()

    if (sendEmail) {
      setLoading(false)
      return Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your message has been sent successfully",
        timer: 4000,
        allowOutsideClick: false,
      })
    } else {
      setLoading(false)
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong! Please try again later.",
        timer: 4000,
        allowOutsideClick: false,
      })
    }
  }

  return (
    <>
      <div className="top-bg">
        <div className="top-bg-overlay"></div>
      </div>
      <Container className="contact-container">
        <Row className="all-title">
          <h4>
            Contact <span> Information</span>
          </h4>
        </Row>

        <Row className="contact-cards">
          <div className="contact">
            <div className="contact-card">
              <div className="contact-card-content">
                <ul>
                  <li>
                    <h6>Country:</h6>
                    <span>Australia</span>
                  </li>
                  <li>
                    <h6>City:</h6>
                    <span>Sydney</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-content">
                <ul>
                  <li>
                    <h6>Email:</h6>
                    <span>
                      <a href="mailto:tamrpariwesh@gmail.com">
                        tamrpariwesh@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <h6>Phone:</h6>
                    <span>0468 804 207</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-card-content">
                <ul>
                  <li>
                    <h6>Email:</h6>
                    <span>tamrpariwesh@gmail.com </span>
                  </li>
                  <li>
                    <h6>Phone:</h6>
                    <span>0468 804 207</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Row>

        <Row className="all-title">
          <h4>
            Get <span> in touch</span>
          </h4>
        </Row>

        <Row>
          <div className="contact-bottom-container">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              <div>
                <div className="icon-container">
                  <FaUser />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="p-text"
                  required
                />
              </div>

              <div>
                <div className="icon-container">
                  <MdAttachEmail />
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="p-text"
                  required
                />
              </div>

              <div>
                <div className="icon-container">
                  <MdMessage />
                </div>
                <textarea
                  name="message"
                  className="p-text"
                  placeholder="Message"
                />
              </div>

              <button className="p-text" type="submit">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default Contact
