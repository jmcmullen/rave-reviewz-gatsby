import React, { Component } from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu';
import Icon from 'react-icons-kit';
import {
  home3,
  info,
  volumeHigh,
  users,
  newspaper,
  ticket,
  bubbles,
} from 'react-icons-kit/icomoon';

import background from '../img/header-bg.jpg';
import logo from '../img/rave-reviewz-logo.png';
import menuIcon from '../img/menu-icon.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const linksMobile = [];
    const linksDesktop = [];
    const menu = [
      { name: 'Home', path: '/', icon: home3 },
      { name: 'Interviews', path: '/interviews', icon: bubbles },
      { name: 'Features', path: '/features', icon: newspaper },
      { name: 'About Us', path: '/about-us', icon: info },
      // { name: 'Community', path: '/community', icon: users },
      { name: 'Podcasts', path: '/podcasts', icon: volumeHigh },
    ];

    menu.forEach(link => {
      linksMobile.push(
        <Link
          className="menu-item"
          to={link.path}
          onClick={this.closeMenu}
          key={link.path}
        >
          <Icon className="menu-icon" icon={link.icon} size={25} />
          {link.name}
        </Link>
      );
      linksDesktop.push(
        <Link className="navbar-item" to={link.path} key={link.path}>
          {link.name}
        </Link>
      );
    });

    const eventsMobile = (
      <a
        className="menu-item"
        href="/events"
        onClick={this.closeMenu}
        key="events"
      >
        <Icon className="menu-icon" icon={ticket} size={25} />
        Events
      </a>
    );

    const eventsDesktop = (
      <a className="navbar-item" href="/events" key="events">
        Events
      </a>
    );

    linksMobile.splice(1, 0, eventsMobile);
    linksDesktop.splice(1, 0, eventsDesktop);

    return (
      <div>
        <Menu
          left
          width={240}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          {linksMobile}
        </Menu>

        <nav
          className="navbar is-transparent"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item">
                <figure className="image">
                  <img
                    src={logo}
                    alt="Rave Reviewz"
                    style={{
                      width: '188px',
                      height: '40px',
                      maxHeight: '100px',
                    }}
                  />
                </figure>
              </Link>
            </div>
            <div className="navbar-start" />
            <div className="navbar-end">
              {linksDesktop}
              <a
                className="navbar-item mobile-menu"
                onClick={() => this.toggleMenu()}
              >
                <img src={menuIcon} />
              </a>
            </div>
            <div className="navbar-end" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
