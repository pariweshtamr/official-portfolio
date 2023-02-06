import Footer from "../Footer/Footer"
import "./mainLayout.scss"

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
