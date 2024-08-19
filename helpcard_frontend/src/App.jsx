import { Outlet } from "react-router-dom"
import Futter from "./component/Futter"
import Help_CardContainer from "./component/Help_CardContainer"
import Homepage from "./component/Homepage"
import Navbar from "./component/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <Outlet/>
      <Help_CardContainer/>
      <Futter/>
    </>
  )
}

export default App
