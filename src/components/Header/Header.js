import "./header.scss"
import { motion } from "framer-motion"
import { images } from "../../constants"
import HeaderSocials from "./HeaderSocials"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1.5,
    },
  },
}

const Header = () => {
  return (
    <div id="home" className="header app-flex">
      <motion.div
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="header-info"
      >
        <div className="header-badge">
          <div className="badge app-flex">
            <span>👋 </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="header-text">Pariwesh</h1>
            </div>
          </div>

          <div className="tag app-flex">
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5, delay: 1 }}
        className="header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="overlay-circle"
          src="/images/circle.svg"
        ></motion.img>
      </motion.div>

      <motion.dev
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="header-circles"
      >
        {[images.redux, images.react, images.mongo].map((circle, i) => (
          <div className="circle app-flex" key={`circle-${i}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.dev>

      <div className="header-mouse">
        <span></span>
      </div>

      <HeaderSocials />
    </div>
  )
}

export default Header
