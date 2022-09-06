import { useSelector } from "react-redux"
import Main from "./components/Main/Main"
import "./style/dark.scss"
import "./App.scss"
import { useEffect, useState } from "react"

function App() {
  const { darkMode } = useSelector((state) => state.darkMode)
  const [darkModeState, setDarkModeState] = useState()

  useEffect(() => {
    setDarkModeState(JSON.parse(sessionStorage.getItem("darkMode")))
  }, [darkMode])
  return (
    <div className={darkModeState ? "app dark" : "app"}>
      <Main />
    </div>
  )
}

export default App
