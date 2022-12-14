import "./style.scss";

import logo from "./logo.png";
import image from "./image.png";
import next from "./next.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <div className="container navbar">
            <img src={logo} alt="" />
            <ul className="nav-list">
              <li className="nav-item">Menu</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Feature</li>
              <li className="nav-item">Gallary</li>
            </ul>

            <button className="btn btn-buy">Buy Now</button>
          </div>
        </nav>
         
      
      </header>
    </>
  );
};
export default Navbar;
