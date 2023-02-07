import { useSelector } from "react-redux"
import Main from "./components/Main/Main"
import "./style/dark.scss"
import "./App.scss"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pariwesh Tamrakar</title>
        <meta
          name="description"
          content="Explore the work and achievements of Pariwesh Tamrakar, a talented MERN-Stack DEveloper. From innovative Projects, to key Achievements/Accomplishments, get a glimpse into Pariwesh's skills and expertise. Discover Pariwesh's approach to web development today!"
        />
        <link rel="canonical" href="https://tamrpariwesh.com" />
      </Helmet>
      <Main />
    </div>
  )
}

export default App
