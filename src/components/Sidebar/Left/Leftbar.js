import { Container, FormCheck } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { images } from "../../../constants"
import { toggle } from "../../../redux/DarkMode/DarkModeSlice"
import CircularProgressBar from "../../CircularProgressBar/CircularProgressBar"
import ProgressBar from "../../ProgressBar/ProgressBar"
import CV from "../../../assets/Pariwesh.Resume.pdf"
import { motion } from "framer-motion"
import "./leftbar.scss"

const Leftbar = () => {
  const dispatch = useDispatch()

  return (
    <>
      <motion.div
        initial={{ x: -290 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="leftbar-container container"
      >
        <div className="leftbar-top">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
            className="avatar"
          >
            <div className="avatar-image">
              <img src={images.dev} alt="" />

              <div className="avatar-light">
                <div className="avatar-light-available"></div>
              </div>
            </div>

            <h5>Pariwesh Tamrakar</h5>
            <p>Full-Stack Developer</p>

            <FormCheck
              type="switch"
              className="dark-mode-switch"
              onClick={() => dispatch(toggle())}
            />
          </motion.div>
        </div>

        <div className="leftbar-scroll-frame">
          <div className="scroll-content">
            <div className="leftbar-about-info">
              <ul>
                <li>
                  <h6>Residence:</h6>
                  <span>Australia</span>
                </li>
                <li>
                  <h6>City:</h6>
                  <span>Sydney</span>
                </li>
                <li>
                  <h6>Age:</h6>
                  <span>27</span>
                </li>
              </ul>
            </div>

            <div className="leftbar-divider"></div>

            <div className="leftbar-lang-skills">
              <div className="lang-skill-item">
                <div className="leftbar-circle-progress">
                  <CircularProgressBar val={90} />
                  <h6>English</h6>
                </div>
              </div>
              <div className="lang-skill-item">
                <div className="leftbar-circle-progress">
                  <CircularProgressBar val={85} />
                  <h6>Nepali</h6>
                </div>
              </div>
            </div>

            <div className="leftbar-divider"></div>

            <div className="leftbar-hard-skills">
              <div className="hard-skill-item">
                <ProgressBar title={"html"} width={"80%"} text={"80%"} />
              </div>
              <div className="hard-skill-item">
                <ProgressBar title={"css"} width={"90%"} text={"90%"} />
              </div>
              <div className="hard-skill-item">
                <ProgressBar title={"javascript"} width={"65%"} text={"60%"} />
              </div>
              <div className="hard-skill-item">
                <ProgressBar title={"react"} width={"75%"} text={"75%"} />
              </div>
              <div className="hard-skill-item">
                <ProgressBar title={"node"} width={"60%"} text={"60%"} />
              </div>
              <div className="hard-skill-item">
                <ProgressBar title={"mongo"} width={"60%"} text={"60%"} />
              </div>
            </div>

            <div className="leftbar-divider"></div>

            <ul className="leftbar-knowledge">
              <li>Bootstrap</li>
              <li>Sass, Styled-Components</li>
              <li>Git-knowledge</li>
            </ul>

            <div className="leftbar-divider"></div>

            <div className="leftbar-link-container">
              <a href={CV} download className="leftbar-link">
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="leftbar-social"
        >
          <a
            href="https://www.linkedin.com/in/pariwesh-tamrakar/"
            target="_blank"
            rel="nofollow noreferrer"
            className="link link-1"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/pariweshtamr"
            target="_blank"
            rel="nofollow noreferrer"
            className="link link-2"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/pariweshtamr7/"
            target="_blank"
            rel="nofollow noreferrer"
            className="link link3"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Leftbar
