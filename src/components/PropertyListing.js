import "../css/LoginContent.css"
import Header from "./Header"
import Footer from "./Footer"
import PropertyListingContent from "./PropertyListingContent"

function Login() {
  return (
      <div>

        <Header/>
      
        <body>
          <PropertyListingContent/>
        </body>   
      
        <Footer/>
      </div>
  )
}

export default Login