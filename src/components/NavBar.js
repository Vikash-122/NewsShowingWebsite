import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const mode = props.darkMode? "dark": "light";
  return (
    <div>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" 
      style={{
        backgroundColor: props.darkMode? "#142342": "#2a53a3",
        color: "white"
      }}>
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/">NewsMonkey</Link>
          <div className="left">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color: "white"}}>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/form">Sign up for Newsletter</Link></li>
            </ul>
          </div>
          <div className="right">
            <button className={`btn btn-${mode}`} 
            onClick={props.toggleDarkMode} 
            style={{backgroundColor: props.darkMode? "black": "white",
              color: props.darkMode? "white": "black"
            }} >
              {props.darkMode? "Light": "Dark"} Theme
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
