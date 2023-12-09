import '../Styles/Main_menu.css';
import Main_filter from './Main_filter';
import Choose from './Choose';
import Main_detail from './Main_detail';


const Main_menu = () => {
  return (
    <div>
      
        <div className="main-menus">
            <Main_filter />  
            <hr className="divider" />
            <Choose />
            <Main_detail />


        </div>

    </div>
  );
};

export default Main_menu;
