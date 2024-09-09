import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  const homeStyle: CSSProperties = {
    color: "#e07a5f",
    transform: "rotate(-90deg)",
    fontSize: "1.5rem",
  };

  return (
    <nav className="nav">
      <ul>
        <li><Link to="/"><i className="fa-solid fa-house" style={homeStyle}></i></Link></li>
        <li><a className="text" href="./Assets/Silva_CV_EN.pdf" download>CV</a></li>
        <li><Link className="text" to="/about.html">ABOUT</Link></li>
      </ul>
    </nav>
  )
}

export function Tabs() {
  return (
    <div className="project-tabs">
      <ul className="project-tabs-list">
        <li><Link className="text" to="/art">ART</Link></li>
        <li><Link className="text" to="/ux-ui">UX/UI</Link></li>
        <li><Link className="text" to="/graphic">GRAPHIC</Link></li>
        <li><Link className="text" to="/illustrations">ILLUSTRATIONS</Link></li>
      </ul>
    </div>
  )
}

export function Mail() {
  return (
    <div className="wrapper">
      <div className="button-mail">
        <div className="icon-mail"><i className="fa-regular fa-envelope"></i></div>
        <span className="text web-mail">
          <a href="mailto:brianna.designwork@gmail.com" style={{ color: "#e07a5f" }}>
            BRIANNA.DESIGNWORK@GMAIL.COM
          </a>
        </span>
      </div>
    </div>
  )
}