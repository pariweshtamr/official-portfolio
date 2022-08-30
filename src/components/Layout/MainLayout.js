import Footer from "../Footer/Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
