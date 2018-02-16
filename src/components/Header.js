import React from 'react';
import Img from 'gatsby-image';

const Header = props => (
  <header className="header">
    <Img alt={props.alt} sizes={props.headerImage.sizes} />
  </header>
);

export default Header;
