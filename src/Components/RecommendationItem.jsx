import React from 'react'
import '../Styles/R_item.css';



const RecommendationItem = (props) => {
    return (
    
      <div className="highlight-card">
        <img className="highlight-img" src={props.imageSrcs} alt="" />
        <div className="highlight-desc">
          <h4>{props.name}</h4>
          <p>Rs.{props.price}</p>
        </div>
      </div>
    );
  
  };

export default RecommendationItem
