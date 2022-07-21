import "./sidebar.scss"
import { NavLink } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { dark, light } from "../../redux/DarkMode/DarkModeSlice"
import { motion } from "framer-motion"

const Sidebarss = () => {
  const dispatch = useDispatch()
  const { darkMode } = useSelector((state) => state.darkMode)

  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed")
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true)

  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false)
      localStorage.setItem("sidebar-collapsed", true)
      return
    }
    setIsExpanded(true)
    localStorage.removeItem("sidebar-collapsed")
  }

  const [activeTab, setActiveTab] = useState("#home")
  return (
    <motion.nav
      className={isExpanded ? "sidebar" : "sidebar collapsed"}
      whileInView={{ left: [-10, 20], opacity: [0, 1] }}
      transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
    >
      <div className="sidebar-header">
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

      <div className="sidebar-items">
        <div
          className={
            activeTab === "#home" ? "sidebar-item.active" : "sidebar-item"
          }
          onClick={() => setActiveTab("#home")}
        >
          <span className="sidebar-icon">
            <i className="fas fa-house"></i>
          </span>
          <span>
            <a href="#home" className="sidebar-text">
              Home
            </a>
          </span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">
            <i className="fas fa-user"></i>
          </span>
          <span>
            <a
              href="#about"
              onClick={() => setActiveTab("#about")}
              className={
                activeTab === "#about" ? "active sidebar-text" : "sidebar-text"
              }
            >
              About
            </a>
          </span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">
            <i className="fas fa-file"></i>
          </span>
          <span>
            <NavLink
              to="/resume"
              activeClassName="active-class"
              exact
              className="sidebar-text"
            >
              Resume
            </NavLink>
          </span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">
            <i className="fas fa-diagram-project"></i>
          </span>
          <span>
            <NavLink
              to="/portfolio"
              activeClassName="active-class"
              exact
              className="sidebar-text"
            >
              Portfolio
            </NavLink>
          </span>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-icon">
            <i className="fas fa-address-card"></i>
          </span>
          <span>
            <NavLink
              to="/contact"
              activeClassName="active-class"
              exact
              className="sidebar-text"
            >
              Contact
            </NavLink>
          </span>
        </div>
      </div>

      <div className="toggle" onClick={handleToggler}>
        {!isExpanded ? (
          <i className="fas fa-bars bars"></i>
        ) : (
          <i className="fas fa-xmark xmark"></i>
        )}
      </div>
    </motion.nav>
  )
}

export default Sidebarss
