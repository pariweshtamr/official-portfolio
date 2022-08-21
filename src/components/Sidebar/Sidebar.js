import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BsFillChatRightTextFill } from "react-icons/bs"
import { ImHome } from "react-icons/im"
import { FaUser, FaBoxes } from "react-icons/fa"
import { RiServiceFill } from "react-icons/ri"
import { BiMenuAltLeft } from "react-icons/bi"
import { MdWork } from "react-icons/md"
import { dark, light } from "../../redux/DarkMode/DarkModeSlice"
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
      <nav className={isCollapsed ? "sidebar collapsed" : "sidebar"}>
        <div className="toggles">
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
            <ImHome />
            {isCollapsed ? "" : <span>Home</span>}
          </a>
          <a
            href="#about"
            onClick={() => setActiveTab("#about")}
            className={activeTab === "#about" ? "active" : ""}
          >
            <FaUser />
            {isCollapsed ? "" : <span>About</span>}
          </a>
          <a
            href="#skills"
            onClick={() => setActiveTab("#skills")}
            className={activeTab === "#skills" ? "active" : ""}
          >
            <MdWork />
            {isCollapsed ? "" : <span>Skills</span>}
          </a>
          <a
            href="#services"
            onClick={() => setActiveTab("#services")}
            className={activeTab === "#services" ? "active" : ""}
          >
            <RiServiceFill />
            {isCollapsed ? "" : <span>Services</span>}
          </a>
          <a
            href="#work"
            onClick={() => setActiveTab("#work")}
            className={activeTab === "#work" ? "active" : ""}
          >
            <FaBoxes />
            {isCollapsed ? "" : <span>Work</span>}
          </a>
          <a
            href="#contact"
            onClick={() => setActiveTab("#contact")}
            className={activeTab === "#contact" ? "active" : ""}
          >
            <BsFillChatRightTextFill />
            {isCollapsed ? "" : <span>Contact</span>}
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
      </nav>
    </>
  )
}

export default Sidebar
