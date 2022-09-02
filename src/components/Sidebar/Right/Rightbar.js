import { useState } from "react"
import { Link } from "react-router-dom"
import "./rightbar.scss"

const Rightbar = () => {
  const [show, setShow] = useState(true)
  const [activeTab, setActiveTab] = useState("/home")

  const handleOnClick = () => {
    setShow(!show)
  }

  return (
    <div
      className={
        show ? "right-menu-bar" : "right-menu-bar right-menu-bar-active"
      }
    >
      <div className="right-menu-bar-container">
        <div className="right-menu-bar-header">
          <div
            className={
              show ? "menu-bar-btn" : "menu-bar-btn menu-bar-btn-active"
            }
            onClick={() => setShow(!show)}
          >
            <span></span>
          </div>
        </div>

        {show && (
          <div className="menu-bar-current-page">{activeTab.slice(1)}</div>
        )}

        <ul className="main-menu">
          <li className={!show ? "menu-item " : "menu-item closed"}>
            <Link
              to="/"
              className={activeTab === "/home" ? "menu-item active" : ""}
              onClick={() => {
                setActiveTab("/home")
                handleOnClick()
              }}
            >
              Home
            </Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link
              to="/portfolio"
              className={activeTab === "/portfolio" ? "menu-item active" : ""}
              onClick={() => {
                setActiveTab("/portfolio")
                handleOnClick()
              }}
            >
              Portfolio
            </Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link
              to="/journey"
              className={activeTab === "/journey" ? "menu-item active" : ""}
              onClick={() => {
                setActiveTab("/journey")
                handleOnClick()
              }}
            >
              Journey
            </Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link
              to="/contact"
              className={activeTab === "/contact" ? "menu-item active" : ""}
              onClick={() => {
                setActiveTab("/contact")
                handleOnClick()
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
