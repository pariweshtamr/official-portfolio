import { useState } from "react"
import { Link } from "react-router-dom"
import "./rightbar.scss"

const Rightbar = () => {
  const [show, setShow] = useState(true)
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

        {show && <div className="menu-bar-current-page">Home</div>}

        <ul className="main-menu">
          <li
            className={
              !show
                ? "menu-item current-menu-item"
                : "menu-item closed curent-menu-item"
            }
          >
            <Link to="/">Home</Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link to="/projects">Portfolio</Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link to="/history">History</Link>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
