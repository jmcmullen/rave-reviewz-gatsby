import React from 'react';
import Img from 'gatsby-image';

const Header = props => (
  <header className="header">
    <Img
      className="header-img"
      alt={props.alt}
      sizes={props.image.childImageSharp.sizes}
    />
  </header>
);

export default Header;
