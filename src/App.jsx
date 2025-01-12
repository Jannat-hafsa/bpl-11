
import { ToastContainer } from "react-toastify";
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Nav from "./Components/Nav"
import Players from './Components/players'
import { useState } from "react";


function App() {
  
const [coins, setCoins] = useState(0);
  return (
    <>
    <Nav coins={coins} />
    <Banner coins={coins} setCoins={setCoins} />
    <Players coins={coins} setCoins={setCoins}></Players>
    <Footer></Footer>
    <ToastContainer />
    </>
  )
}

export default App
