import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { onTabChange } from "../../../redux/ActiveTab/TabSlice"
import { MdLanguage } from "react-icons/md"
import "./rightbar.scss"

const Rightbar = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(true)
  // const [activeTab, setActiveTab] = useState("/home")
  const { selectedTab } = useSelector((state) => state.activeTab)

  const handleOnClick = () => {
    setShow(!show)
  }

  return (
    <>
      <div className={!show ? "rightbar-wrapper" : ""}></div>
      <motion.div
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
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
            <div className="menu-bar-current-page">{selectedTab.slice(1)}</div>
          )}

          <ul className="main-menu">
            <li className={!show ? "menu-item " : "menu-item closed"}>
              <Link
                to="/"
                className={selectedTab === "/home" ? "menu-item active" : ""}
                onClick={() => {
                  dispatch(onTabChange("/home"))
                  handleOnClick()
                }}
              >
                Home
              </Link>
            </li>
            <li className={!show ? "menu-item" : "menu-item closed"}>
              <Link
                to="/portfolio"
                className={
                  selectedTab === "/portfolio" ? "menu-item active" : ""
                }
                onClick={() => {
                  dispatch(onTabChange("/portfolio"))
                  // setActiveTab("/portfolio")
                  handleOnClick()
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className={!show ? "menu-item" : "menu-item closed"}>
              <Link
                to="/journey"
                className={selectedTab === "/journey" ? "menu-item active" : ""}
                onClick={() => {
                  dispatch(onTabChange("/journey"))

                  // setActiveTab("/journey")
                  handleOnClick()
                }}
              >
                Journey
              </Link>
            </li>
            <li className={!show ? "menu-item" : "menu-item closed"}>
              <Link
                to="/contact"
                className={selectedTab === "/contact" ? "menu-item active" : ""}
                onClick={() => {
                  dispatch(onTabChange("/contact"))

                  // setActiveTab("/contact")
                  handleOnClick()
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="right-menu-bar-footer">
            <MdLanguage /> <span>ENG</span>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Rightbar
