import { useSelector } from "react-redux"
import Main from "./components/Main/Main"
import "./style/dark.scss"
import "./App.scss"
import { useEffect, useState } from "react"

function App() {
  const { lightMode } = useSelector((state) => state.lightMode)
  const [lightModeState, setLightModeState] = useState()

  useEffect(() => {
    setLightModeState(
      sessionStorage.getItem("lightMode")
        ? JSON.parse(sessionStorage.getItem("lightMode"))
        : false
    )
  }, [lightMode])
  return (
    <div className={lightModeState === false ? "app dark" : "app"}>
      <Main />
    </div>
  )
}

export default App
