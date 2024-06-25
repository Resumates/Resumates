import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <Header>
      <button>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title-btn'>
        <Link to="/">이력서</Link>
      </h1>
      <nav>...</nav>
    </Header>
  );
};

export default Navigation;
