import '../Styles/Main_detail.css';

const FoodItems = (props) => {
    return (
   
<div class="detail-card">
<img class="detail-img" src={`../Images/${props.imageSrcs}`} alt="" />
<div class="detail-desc">
    <div class="detail-name">
        <h4>{props.names}</h4>
        <p class="detail-sub">{props.text}</p>
        <p class="price">Rs.{props.prices}</p>
      </div>
      {/* <ion-icon class="detail-favorites" name="bookmark-outline"></ion-icon> */}
</div>
</div>

    );
  };

const Main_detail = () => {
     
    return(

        <div className="detail-wrapper">

            <FoodItems imageSrcs="Salad1.jpg" names="Soup" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="650" />

            <FoodItems imageSrcs="Salad1.jpg" names="Pizza" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="850" />

            <FoodItems imageSrcs="Salad1.jpg" names="Drinks" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="250" />

            <FoodItems imageSrcs="Salad1.jpg" names="Burger" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="220" />

            <FoodItems imageSrcs="Salad1.jpg" names="Coffee" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="250" />

            <FoodItems imageSrcs="Salad1.jpg" names="Salad" text="Lorem ipsum dolor sit amet consectetur adipisicing.
            " prices="450" />
        </div>


    ); 
};  

export default Main_detail;