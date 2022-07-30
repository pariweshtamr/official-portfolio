import { motion } from "framer-motion"

const HeroSocials = () => {
  return (
    <motion.div
      whileInView={{ right: [0, 20], opacity: [0, 1] }}
      transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
      className="hero-socials-menu"
    >
      <a
        href="https://www.linkedin.com/in/pariwesh-tamrakar/"
        target="_blank"
        rel="noreferrer"
        className="link link-1"
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a
        href="https://github.com/pariweshtamr"
        target="_blank"
        rel="noreferrer"
        className="link link-2"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.facebook.com/pariweshtamr7/"
        target="_blank"
        rel="noreferrer"
        className="link link3"
      >
        <i className="fa-brands fa-facebook-f"></i>
      </a>
    </motion.div>
  )
}

export default HeroSocials
