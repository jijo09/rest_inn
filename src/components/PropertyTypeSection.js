
import PropertyTypeCard from "./PropertyTypeCard";
import "../css/FeaturedResort.css"
import "../css/Card.css"
import Resort from "../images/Resort.jpg"
import Hotel from "../images/Hotel.jpg"
import Condo from "../images/condo.jpg"
import Apartment from "../images/apartment.jpg"

const PropertyTypeSection = () => {

  return (

    <section id="section-resort-list">

      <div>
      
          <h1>Property Type Section</h1><br/>
          <br/>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">


              <PropertyTypeCard  type="resort" image ={Resort} />
              <PropertyTypeCard  type="hotel" image ={Hotel} />
              <PropertyTypeCard  type="apartment" image ={Apartment} />
              <PropertyTypeCard  type="condo" image ={Condo} />
              
  
          </div>
          <br/>
          <br/>
          <br/>

      </div>

    </section>

  );
};

export default PropertyTypeSection;
