import React from "react";
import { Container } from "react-bootstrap";
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <Container>
        <ul className="header__nav">
          <li className="header__nav-item">
              <NavLink to="/news">Новини</NavLink>
          </li>
          <li className="header__nav-item"></li>
          <li className="header__nav-item"></li>
          <li className="header__nav-item"></li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
