import { useSelector } from "react-redux"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Work from "./components/Work/Work"
import "./style/dark.scss"

function App() {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar />
      {/* <Header /> */}
      {/* <Work /> */}
    </div>
  )
}

export default App
