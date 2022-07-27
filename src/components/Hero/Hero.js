import "./hero.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import HeroSocials from "./HeroSocials"
import Bubble from "../Bubble/Bubble"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      delay: 2.5,
      ease: "easeInOut",
    },
  },
}

const Hero = () => {
  return (
    <>
      <div id="home" className="hero app-flex">
        <div className="hero-left">
          <motion.div
            whileInView={{ x: [-300, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="hero-info"
          >
            <div className="hero-badge">
              <div className="badge app-flex">
                <span>👋 </span>
                <div style={{ marginLeft: 20 }}>
                  <p className="p-text">Hello, I am</p>
                  <h1 className="hero-text">Pariwesh</h1>
                </div>
              </div>

              <div className="tag app-flex">
                <p className="p-text">Full Stack Developer</p>
              </div>
            </div>

            {/* <div className="hero-circles-left">
            {[images.html, images.css, images.javascript].map((circle, i) => (
              <div className="circle-left app-flex" key={`circle-${i}`}>
                <img src={circle} alt="circle" />
              </div>
            ))}
          </div> */}
          </motion.div>
        </div>

        <motion.div
          whileInView={{ y: [-300, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="hero-img"
        >
          <img src={images.profile} alt="profile_bg" />
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="hero-circles-right"
        >
          {[images.node, images.react, images.mongo].map((circle, i) => (
            <div className="circle app-flex" key={`circle-${i}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src={circle} alt="circle" />
            </div>
          ))}
        </motion.div>

        <HeroSocials />
      </div>

      <div className="hero-mouse app-flex">
        <span></span>
      </div>
    </>
  )
}

export default Hero
