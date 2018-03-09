import React, { Component } from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

class FeaturedPosts extends Component {
  constructor(props) {
    super(props);
  }

  post(x) {
    return this.props.posts[x].node.frontmatter;
  }

  title({ title, date }) {
    const lines = title.split(' @ ');
    return (
      <h2 className="title">
        {lines[0]}
        <small>
          <br />
          {lines.length > 1 ? ` @ ${lines[1]}` : date}
        </small>
      </h2>
    );
  }

  render() {
    return (
      <section className="featured-posts">
        <div className="columns">
          <Link className="column post-0" to={this.post(0).path}>
            <Img
              className="featured-image"
              sizes={this.post(0).featuredImage.childImageSharp.sizes}
            />
            <div className="details">{this.title(this.post(0))}</div>
          </Link>
          <div className="column">
            <Link className="featured-row post-1" to={this.post(1).path}>
              <Img
                className="featured-image"
                sizes={this.post(1).featuredImage.childImageSharp.sizes}
              />
              <div className="details">{this.title(this.post(1))}</div>
            </Link>
            <div className="featured-row">
              <div className="columns">
                <Link className="column post-2" to={this.post(2).path}>
                  <Img
                    className="featured-image"
                    sizes={this.post(2).featuredImage.childImageSharp.sizes}
                  />
                  <div className="details">{this.title(this.post(2))}</div>
                </Link>
                <Link className="column post-3" to={this.post(3).path}>
                  <Img
                    className="featured-image"
                    sizes={this.post(3).featuredImage.childImageSharp.sizes}
                  />
                  <div className="details">{this.title(this.post(3))}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedPosts;
