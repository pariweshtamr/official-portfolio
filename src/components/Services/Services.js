import images from "../../constants/images"
import { motion } from "framer-motion"
import "./services.scss"
const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="head-text">
        My Awesome
        <div>services</div>
      </h2>

      <div className="services-content app-flex">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="services-left"
        >
          <div className="services-left-content">
            <h4 className="service-title">UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia iste possimus ratione nesciunt voluptate, fuga earum unde.
            </p>
          </div>

          <div className="services-left-content">
            <h4 className="service-title">UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia iste possimus ratione nesciunt voluptate, fuga earum unde.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ y: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="services-img app-flex"
        >
          <div className="img-container">
            <img src={images.service} alt="" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="services-right"
        >
          <div className="services-right-content">
            <h4 className="service-title">UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia iste possimus ratione nesciunt voluptate, fuga earum unde.
            </p>
          </div>
          <div className="services-right-content">
            <h4 className="service-title">UI/UX Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quia iste possimus ratione nesciunt voluptate, fuga earum unde.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
