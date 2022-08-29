import { useState } from "react"
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

        <div className="menu-bar-current-page"></div>

        <ul className="main-menu">
          <li className="menu-item current-menu-item">
            <a href="/home">Home</a>
          </li>
          <li className="menu-item">
            <a href="/home">Portfolio</a>
          </li>
          <li className="menu-item">
            <a href="/home">History</a>
          </li>
          <li className="menu-item">
            <a href="/home">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
