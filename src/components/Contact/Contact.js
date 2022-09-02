import { useRef, useState } from "react"
import { images } from "../../constants"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import "./contact.scss"
import { FaUser } from "react-icons/fa"
import { MdAttachEmail, MdMessage } from "react-icons/md"
import { Container, Row } from "react-bootstrap"

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
    <Container className="contact-container">
      <Row className="all-title">
        <h5>
          Contact <span> Information</span>
        </h5>
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
                  <span>tamrpariwesh@gmail.com </span>
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
        <h5>
          Get <span> in touch</span>
        </h5>
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

      {/* <div className="contact-cards">
        <div className="contact-card">
          <img src={images.email} alt="email" />
          <a
            href="mailto:tamrpariwesh@gmail.com"
            className="p-text"
            target="_blank"
            rel="noreferrer"
          >
            tamrpariwesh@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +61468804207" className="p-text">
            (+61) 468804207
          </a>
        </div>
      </div> */}

      {/* <div className="contact-bottom app-flex">
        <div className="contact-icons">
          <div className="contact-icon">
            <a
              href="https://www.linkedin.com/in/pariwesh-tamrakar/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinLine />
            </a>
          </div>
          <div className="contact-icon">
            <a
              href="https://m.me/pariweshtamr7"
              target="_blank"
              rel="noreferrer"
            >
              <RiMessengerLine />
            </a>
          </div>
          <div className="contact-icon">
            <a
              href="https://api.whatsapp.com/send?phone+61468804207"
              target="_blank"
              rel="noreferrer"
            >
              <RiWhatsappLine />
            </a>
          </div>
        </div>

        <form ref={form} className="contact-form app-flex" onSubmit={sendEmail}>
          <div className="app-flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="p-text"
              required
            />
          </div>
          <div className="app-flex">
            <input
              type="text"
              placeholder="Your Email"
              name="email"
              className="p-text"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              className="p-text"
              placeholder="Your Message"
            />
          </div>
          <button className="p-text" type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div> */}
    </Container>
  )
}

export default Contact
