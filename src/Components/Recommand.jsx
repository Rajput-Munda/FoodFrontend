import '../Styles/Recommand.css';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import RecommendationItem from './RecommendationItem';


const Recommand = () => {
  return (
    <div>

      < div class="main-highlight">
        {/* <!-- title section and arrow --> */}
        <div class="main-header">
            <h2 class="main-title">Recommendations</h2>
            <div class="main-arrow">
            <FaChevronCircleLeft className="back"/>
            <FaChevronCircleRight className="next"/>
            </div>
            </div>
            <div className="highlight-wrapper">
              <RecommendationItem name="Fresh Salad" price="110" imageSrcs="../Images/Salad1.jpg" />
              <RecommendationItem name="Fresh Salad" price="110" imageSrcs="../Images/Salad1.jpg" />
              <RecommendationItem name="Fresh Salad" price="110" imageSrcs="../Images/Salad1.jpg" />
              <RecommendationItem name="Fresh Salad" price="110" imageSrcs="../Images/Salad1.jpg" />
              
            </div>
           
        

        {/* <!-- highlight menu --> */}
        
           

      
      </div>

    </div>
  );
};

export default Recommand;
