
import Header from '../components/Header';
import Footer  from '../components/Footer';
import "../css/Description.css"
import Description from "./Description"


const DescriptionPage = () => {

  return (

    <div className="grid grid-row-3" id="main-container">

    <Header/>
    <Description/>
    <Footer/>

</div>
  )
}

export default DescriptionPage