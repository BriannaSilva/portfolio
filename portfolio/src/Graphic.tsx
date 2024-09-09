import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
import { Mail, Nav, Tabs } from './common';

function Graphic() {
  return (
    <>
      <Nav></Nav>
      <Tabs></Tabs>
      <Mail></Mail>
      <div className="body-work">
        <div className="Page-5">
          <div className="web">
            <ul className="web-list">
              <li><Link className="link" to="/posavasos">COASTERS</Link></li>
              <li><Link className="link" to="/harry">HARRY POTTER</Link></li>
              <li><Link className="link" to="/rayban">RAY BAN</Link></li>
              <li><Link className="link" to="/stickers">STICKERS</Link></li>
              <li><Link className="link" to="/flyers">FLYERS</Link></li>
              <li><Link className="link" to="/binnacle">BINNACLE</Link></li>
              <li><Link className="link" to="/user_manual">USER MANUAL</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphic;
