import React from 'react';
import Icon from 'react-icons-kit';
import { facebook, instagram, twitter } from 'react-icons-kit/icomoon';

export default ({ data }) => (
  <div className="social-wrapper">
    <a
      href="https://facebook.com/ravereviewz"
      target="_blank"
      className="feed fb"
    >
      <p>
        <Icon className="menu-icon" icon={facebook} size={25} />
        RaveReviewz on facebook
      </p>
    </a>
    <a
      href="https://instagram.com/ravereviewz"
      target="_blank"
      className="feed ig"
    >
      <p>
        <Icon className="menu-icon" icon={instagram} size={25} />
        RaveReviewz on instagram
      </p>
    </a>
    <a
      href="https://twitter.com/Rave_Reviewz"
      target="_blank"
      className="feed tw"
    >
      <p>
        <Icon className="menu-icon" icon={twitter} size={25} />
        RaveReviewz on twitter
      </p>
    </a>
  </div>
);
