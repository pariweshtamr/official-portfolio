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

        {show && <div className="menu-bar-current-page">Home</div>}

        <ul className="main-menu">
          <li
            className={
              !show
                ? "menu-item current-menu-item"
                : "menu-item closed curent-menu-item"
            }
          >
            <a href="/home">Home</a>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <a href="/home">Portfolio</a>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <a href="/home">History</a>
          </li>
          <li className={!show ? "menu-item" : "menu-item closed"}>
            <a href="/home">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
