import '../Styles/Main_filter.css';
import { FaChevronCircleLeft, FaChevronCircleRight, FaUtensils, FaHamburger, FaPizzaSlice, FaWineGlass, FaIceCream, FaCoffee, FaFish, FaAppleAlt } from 'react-icons/fa';

const Main_filter = () => {
  return (
    
    <div className="main-filter">
      <div>
        <h2 className="main-title">Menu <br /> Category</h2>
        <div className="main-arrow">
          <FaChevronCircleLeft className="back-menus" />
          <FaChevronCircleRight className="next-menus" />
        </div>
      </div>

      <div className="filter-wrapper">
        <div className="filter-card">
          <div className="filter-icon">
            <FaUtensils />
          </div>
          <p>All Menus</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaHamburger />
          </div>
          <p>Burger</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaPizzaSlice />
          </div>
          <p>Pizza</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaWineGlass />
          </div>
          <p>Wine</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaIceCream />
          </div>
          <p>Ice Cream</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaCoffee />
          </div>
          <p>Coffee</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaFish />
          </div>
          <p>Sea Food</p>
        </div>

        <div className="filter-card">
          <div className="filter-icon">
            <FaAppleAlt />
          </div>
          <p>Nutrition</p>
        </div>
      </div>
    </div>

    
  );
};

export default Main_filter;

