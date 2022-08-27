import { MdSchool } from "react-icons/md"
import { motion } from "framer-motion"
import TimelineContent from "../Timeline/TimelineContent"
import "./about.scss"
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="head-text">
        About<div>Me</div>
      </h2>

      <div className="about-container app-flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="about-left"
        >
          <div className="about-img">
            <img src="images/about.svg" alt="" />
          </div>

          <p className="paragraph text-center">
            Proactive, analytical and detail-oriented full-stack developer with
            experiences in MongoDB, ExpressJs, ReactJs and NodeJs{" "}
            <span>(MERN-stack)</span>. I am passionate and love to create and
            build along with solving problems.
          </p>

          <div className="about-bottom app-flex">
            <div className="about-buttons">
              <div className="about-button">
                <img src="/images/talk.png" alt="" rel="noreferrer" />
                <a href="#contact" rel="noreferrer">
                  Let's Talk
                </a>
              </div>

              <div className="about-button">
                <img src="/images/resume.png" alt="" />
                <a href="" download target="_blank" rel="noreferrer">
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="about-right">
          <div className="about-timeline">
            <h4 className="timeline-header" data-text="&nbsp;Timeline">
              &nbsp;Timeline
            </h4>
          </div>

          <div className="timeline-title">
            <div className="timeline-title-icon">
              <MdSchool />
            </div>
            <div className="timeline-text-title">My Journey so far ...</div>
          </div>

          <div className="timeline-content">
            <TimelineContent
              year="2022 - Present"
              title="Full Stack Developer"
              subTitle="Rebb Tech"
              text="MERN STACK"
            />
            <TimelineContent
              year="2021 - 2022"
              title="Full Stack Developer Course"
              subTitle="Dented Code Academy"
              text="MERN STACK"
            />
            <TimelineContent
              year={"2019 - 2021"}
              title={"Master of Applied Information Technology"}
              subTitle={"Victoria University"}
              text={"AWARD: First Year Course Champion"}
            />
          </div>

          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 1 }}
            className="highlights app-flex"
          >
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
