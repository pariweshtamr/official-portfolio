import { useState } from "react"
import { AiOutlineClose, AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail, BiMenuAltRight } from "react-icons/bi"
import { BsMoon, BsSun } from "react-icons/bs"
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
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState("#home")
  return (
    <>
      <motion.nav
        className={isCollapsed ? "sidebar collapsed" : "sidebar"}
        whileInView={{ left: [-100, 10], opacity: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <div className="toggles ">
          {darkMode ? (
            <BsSun className="sunToggle" onClick={() => dispatch(light())} />
          ) : (
            <BsMoon className="moonToggle" onClick={() => dispatch(dark())} />
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
          </a>
          <a
            href="#experience"
            onClick={() => setActiveTab("#experience")}
            className={activeTab === "#experience" ? "active" : ""}
          >
            <BiBook />
          </a>
          <a
            href="#services"
            onClick={() => setActiveTab("#services")}
            className={activeTab === "#services" ? "active" : ""}
          >
            <RiServiceLine />
          </a>
          <a
            href="#projects"
            onClick={() => setActiveTab("#projects")}
            className={activeTab === "#projects" ? "active" : ""}
          >
            <FaBoxes />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveTab("#contact")}
            className={activeTab === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </div>
        <hr />
        {isCollapsed ? (
          <>
            <div className="me">
              <img src={images.profile} alt="Pariwesh" />
            </div>
            <div className="sidebar-toggle">
              <BiMenuAltRight onClick={() => setIsCollapsed(false)} />
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
