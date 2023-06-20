import React, {useState} from "react";
import { Link } from "react-router-dom";
import lightloading from "./Images/lightthemeloading.gif";
import darkloading from "./Images/darkthemeloading.gif";
import lightdefaultimage from "./Images/defaultpic.png";
import darkdefaultimage from "./Images/defaultpic2.png";


export let theme = "light";
export let setTheme;
export let loader = lightloading;
export let prev_no_of_cards;
export let defaultimage = lightdefaultimage;



export default function Navbar(props) {
  [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const navLinks = document.getElementsByClassName('nav-link');
    const cards = document.getElementsByClassName('card');
    const navbar = document.getElementsByClassName('navbar')[0];
    const navbarBrand = document.getElementsByClassName('navbar-brand')[0];
    let currentTheme = theme;
    const authorAndDateTime = document.getElementsByClassName('text-muted');

    if (currentTheme === "light") {
      setTheme("dark");
      currentTheme = "dark";
      loader = darkloading;
      defaultimage = darkdefaultimage;
      document.body.style.backgroundColor = '#010409';
      document.body.style.color = '#FDF5E6';
      navbar.style.backgroundColor = 'black';
      navbarBrand.style.color = '#f8f9fa';
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#FDF5E6';
      }

      for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = 'black';
        cards[i].style.color = '#fff';
        // authorAndDateTime[i].style.color = '#FFE4E1';
      }

      for (let i = 0; i < authorAndDateTime.length; i++) {
        authorAndDateTime[i].style.color = '#FFE4E1';
      }
    }
    else {
      setTheme("light");
      currentTheme = "light";
      loader = lightloading;
      defaultimage = lightdefaultimage;
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#212529';
      navbar.style.backgroundColor = '#f8f9fa';
      navbarBrand.style.color = 'black';
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#212529';
      }
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.backgroundColor = '#fff';
        cards[i].style.color = '#212529';
        authorAndDateTime[i].style.color = '#6c6f72';
      }
    }
  }
  
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleTheme}
              style={{cursor: 'pointer'}}
            />
            <label
              className="form-check-label "
              htmlFor="flexSwitchCheckDefault"
              
            >
              Dark Theme
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}