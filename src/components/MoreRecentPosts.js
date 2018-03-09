import React, { Component } from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

class MoreRecentPosts extends Component {
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
        {this.props.posts.map(post => (
          <div className="content post-preview" key={post.node.id}>
            <Img
              className="img-preview"
              alt={post.node.frontmatter.title}
              sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes}
            />
            <div className="text">
              <p>
                <Link className="post-link" to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.node.frontmatter.date}</small>
              </p>
              <p>
                {post.node.frontmatter.description}
                <br />
                <br />
                <Link
                  className="button is-small"
                  to={post.node.frontmatter.path}
                >
                  Keep Reading →
                </Link>
              </p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default MoreRecentPosts;
