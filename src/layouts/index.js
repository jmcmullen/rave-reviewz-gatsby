import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Rave Reviewz Magazine" />
    <Navbar />
    <div>{children()}</div>
    <link
      href="https://fonts.googleapis.com/css?family=Noto+Serif"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Oswald:400,700"
      rel="stylesheet"
    />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
