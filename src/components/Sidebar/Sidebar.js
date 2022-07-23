import { useState } from "react"
import { AiOutlineClose, AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail, BiMenuAltLeft } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { FaBoxes } from "react-icons/fa"
import { dark, light } from "../../redux/DarkMode/DarkModeSlice"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { images } from "../../constants"
import "./sidebar.scss"

const Sidebar = () => {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state) => state.darkMode)
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [activeTab, setActiveTab] = useState("#home")
  return (
    <>
      <motion.nav
        className={isCollapsed ? "sidebar collapsed" : "sidebar"}
        whileInView={{ left: [-200, 10], opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <div className="toggles ">
          {darkMode ? (
            <i
              className="fas fa-sun sunToggle"
              onClick={() => dispatch(light())}
            ></i>
          ) : (
            <i
              className="fas fa-moon moonToggle"
              onClick={() => dispatch(dark())}
            ></i>
          )}
        </div>
        <hr />
        <div className="links">
          <a
            href="#home"
            onClick={() => setActiveTab("#home")}
            className={activeTab === "#home" ? "active" : ""}
          >
            <AiOutlineHome />

            <span>Home</span>
          </a>
          <a
            href="#about"
            onClick={() => setActiveTab("#about")}
            className={activeTab === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
            <span>About</span>
          </a>
          <a
            href="#experience"
            onClick={() => setActiveTab("#experience")}
            className={activeTab === "#experience" ? "active" : ""}
          >
            <BiBook />
            <span>Experience</span>
          </a>
          <a
            href="#services"
            onClick={() => setActiveTab("#services")}
            className={activeTab === "#services" ? "active" : ""}
          >
            <RiServiceLine />
            <span>Services</span>
          </a>
          <a
            href="#work"
            onClick={() => setActiveTab("#work")}
            className={activeTab === "#work" ? "active" : ""}
          >
            <FaBoxes />
            <span>Work</span>
          </a>
          <a
            href="#contact"
            onClick={() => setActiveTab("#contact")}
            className={activeTab === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
            <span>Contact</span>
          </a>
        </div>
        <hr />
        {isCollapsed ? (
          <>
            <div className="me">
              <img src={images.profile} alt="Pariwesh" />
            </div>
            <div className="sidebar-toggle">
              <BiMenuAltLeft onClick={() => setIsCollapsed(false)} />
            </div>
          </>
        ) : (
          <>
            <div className="me">
              <img src={images.profile} alt="" />
              <div className="sidebar-name">Pariwesh</div>
            </div>
            <div className="sidebar-toggle">
              <AiOutlineClose onClick={() => setIsCollapsed(true)} />
            </div>
          </>
        )}
      </motion.nav>
    </>
  )
}

export default Sidebar
