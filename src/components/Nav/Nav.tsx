import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer } from './Nav.styled';
import { MdCoronavirus } from 'react-icons/md';
function Nav() {
  return (
    <NavContainer>
      <h1>
        <span>
          <MdCoronavirus />
        </span>
        CORONA - <span>INFO</span>
      </h1>
      <ul>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/'>DISTANCE</a>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
