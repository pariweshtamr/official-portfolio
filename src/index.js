import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import Store from "./Store"
import { HelmetProvider } from "react-helmet-async"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
