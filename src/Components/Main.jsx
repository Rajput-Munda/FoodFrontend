import '../Styles/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './Navbar';
import Recommand from './Recommand';
import Main_menu from './Main_menu';


const Main = () => {
  return (
    <div>
      
        <Navbar />
        <Recommand />
        <Main_menu />
      </div>
    
  );
};

export default Main;
