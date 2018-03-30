import React, { Component } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

class ShareButtons extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        isVisible: window.innerHeight < document.documentElement.scrollTop,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {
      this.setState({
        isVisible: window.innerHeight < document.documentElement.scrollTop,
      });
    });
  }

  render() {
    return (
      <section
        className={`share-buttons ${
          this.state.isVisible ? 'visible' : 'hidden'
        }`}
      >
        <div className="post-icons post-icons--desktop">
          <FacebookShareButton url={window.location.href}>
            <FacebookIcon size={52} round={false} /> Share
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <TwitterIcon size={52} round={false} /> Tweet
          </TwitterShareButton>
          <EmailShareButton url={window.location.href}>
            <EmailIcon size={52} round={false} /> Email
          </EmailShareButton>
        </div>
      </section>
    );
  }
}

export default ShareButtons;
