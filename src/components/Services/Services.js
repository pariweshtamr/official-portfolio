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
          <div className="services-left-content ">
            <h4 className="service-title">Web Development</h4>
            <p>
          Developing a scalable website that tailors to your needs. I keep in mind the best interests of my clients to meet or even exceed their expectations on how the product/service is delivered.
            </p>
          </div>

          <div className="services-left-content">
            <h4 className="service-title">Custom CMS Development</h4>
            <p>
            Every business would prefer a custom-tailored CMS system to support their workflow. 
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
            If you need a web design company to deliver visually engaging IT projects with outstanding UI/UX, Andersen and our user-centered approach is your choice.
            </p>
          </div>
          <div className="services-right-content">
            <h4 className="service-title">Support</h4>
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
