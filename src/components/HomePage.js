
import '../css/HomePage.css'
import Header from "./Header"
import Footer from "./Footer"
import RotatingImg from "./RotatingImg"
import PropertyTypeSection from "./PropertyTypeSection"
import BestSeller from "./BestSeller"

function App() {
  return (
      <div>
        <Header/>
      
        <body>
          <div> <RotatingImg/></div>
          <PropertyTypeSection/>
          <BestSeller/>
        </body>   
      
        <Footer/>
      </div>
  )
}

export default App
