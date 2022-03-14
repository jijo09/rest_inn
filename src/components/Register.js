import '../css/HomePage.css'
import Header from "./Header"
import Footer from "./Footer"
import RegisterContent from "./RegisterContent"
import "../css/LoginContent.css"

function Register() {
  return (
      <div>
        <Header/>

        <body>
          <RegisterContent/>
        </body>   
      
        <Footer/>
      </div>
  )
}

export default Register