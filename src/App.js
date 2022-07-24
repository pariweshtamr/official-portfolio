import { useSelector } from "react-redux"
import Main from "./components/Main/Main"
import Sidebar from "./components/Sidebar/Sidebar"
import "./style/dark.scss"
import "./App.scss"

function App() {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Sidebar />
      <Main />
      {/* <Header /> */}
      {/* <Work /> */}
    </div>
  )
}

export default App
