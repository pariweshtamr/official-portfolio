import { motion } from "framer-motion"
const ProgressBar = ({ title, width, text }) => {
  return (
    <div className="progress-bar-container">
      <div className="hard-skill-header">
        <h6>{title}</h6>
      </div>
      <div className="hard-skill-progress">
        <div className="progress" style={{ width: width }}>
          <motion.span
            whileInView={{ x: [-130, 0], opacity: [0, 1] }}
            transition={{ duration: 2.5, delay: 0.5 }}
            style={{ width: width }}
          ></motion.span>
        </div>
        <motion.p
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="progress-text"
        >
          {text}
        </motion.p>
      </div>
    </div>
  )
}

export default ProgressBar
