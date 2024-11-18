import { Outlet } from "react-router-dom"
import './assets/css/Mainstyle.css'
import Footer from "./components/Footer"
import Header from "./components/Header/Header"




function App() {
  

  return (
    <>
    <div className="wrapper">
  <Header/>
     <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
