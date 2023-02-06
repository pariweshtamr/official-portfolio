import { useSelector } from "react-redux"
import Main from "./components/Main/Main"
import "./style/dark.scss"
import "./App.scss"
import { useEffect, useState } from "react"

function App() {
  const { lightMode } = useSelector((state) => state.lightMode)
  const [lightModeState, setLightModeState] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const showLoader = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500))
  }

  useEffect(() => {
    showLoader().then(() => {
      const loaderElement = document.querySelector(".loader-wrapper")
      if (loaderElement) {
        loaderElement.remove()
        setIsLoading(!isLoading)
      }
    })
  }, [isLoading])

  useEffect(() => {
    setLightModeState(
      sessionStorage.getItem("lightMode")
        ? JSON.parse(sessionStorage.getItem("lightMode"))
        : false
    )
  }, [lightMode])

  if (isLoading) {
    return null
  }
  return (
    <div className={lightModeState === false ? "app dark" : "app"}>
      <Main />
    </div>
  )
}

export default App
