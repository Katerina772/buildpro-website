import React from 'react';


export default function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          <span style={{fontFamily:'Montserrat',fontWeight:800}}>Build<span style={{color:'var(--accent)'}}>Pro</span></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item"><a className="nav-link" href="#hero">Про нас</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Послуги</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Наші роботи</a></li>
            <li className="nav-item"><a className="nav-link" href="#testimonials">Відгуки</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Контакти</a></li>
           
          </ul>
        </div>
      </div>
    </nav>
  )
}