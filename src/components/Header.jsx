import logo from "../images/undraw_coding_re_iv62.svg";
import React, { useState } from "react";

export default function Header(props) {
  
  // function handleClickTheme() {
  //   const dropDown = document.getElementById('drop-list');

  //     dropDown.classList.toggle('drop');
  // }

  const [show, setShow] = useState(false);

  function dropTheme () {
    setShow(prevState => !prevState);
  }

  return (
    <nav className={`navbar navbar-expand-lg ${props.themeMode ? "bg-dark navbar-dark" : "bg-light"} bg-gradient fixed-top`} role="navigation" aria-expanded="false" id="navbar">
      <div className="container-fluid mx-3" id="nav-container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" style={{ width: "6rem" }} className='img-fluid' /> Roy Bustillo
        </a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navmenu" aria-controls="navmenu"><span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu" aria-expanded="false">
          <ul className="navbar-nav navbar-nav-scroll ms-auto pe-2" id="navItem">
            <li className={`nav-item ${props.themeMode ? 'white-line' : 'black-line'}`}><a href="#skills" className="nav-link">Skills</a></li>
            <li className={`nav-item ${props.themeMode ? 'white-line' : 'black-line'}`}><a href="#projects" className="nav-link">Personal Projects</a></li>
            <li className={`nav-item ${props.themeMode ? 'white-line' : 'black-line'}`}><a href="#about" className="nav-link">About</a></li>
            <li className={`nav-item ${props.themeMode ? 'white-line' : 'black-line'}`}><a href="#contact" className="nav-link">Contact</a></li>
            <div className="vr d-none d-lg-flex"></div>
            <li className='nav-item'>
              <div className="dropdown">
                <button className="nav-link theme" type='button' id='theme' data-bs-toggle='dropdown' onClick={dropTheme}>{props.themeMode ? <i className="bi bi-moon-stars-fill"></i> : <i className="bi bi-brightness-high-fill"></i>}&nbsp;{show ? <i className="bi bi-caret-up-fill"></i> : <i className="bi bi-caret-down-fill"></i>}</button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li className="dropdown-item" onClick={props.handleClick}>
                    <button type='button' className="btn" style={{border: 'none'}}><i className="bi bi-brightness-high-fill"></i>&nbsp;Light</button>
                  </li> 
                  <li className="dropdown-item" onClick={props.handleClick}>
                    <button type='button' className='btn' style={{border: 'none'}}><i className="bi bi-moon-stars-fill"></i>&nbsp;Dark</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
