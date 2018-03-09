import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Script from 'react-load-script';
import graphql from 'graphql';
import FeaturedPosts from '../components/FeaturedPosts';
import MoreRecentPosts from '../components/MoreRecentPosts';

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (typeof window !== `undefined` && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  getFeaturedPosts(posts) {
    return posts
      .filter(
        post =>
          post.node.frontmatter.templateKey === 'interview-post' ||
          post.node.frontmatter.templateKey === 'review-post'
      )
      .slice(0, 4);
  }
  getMoreRecentPosts(posts) {
    return posts
      .filter(
        post =>
          post.node.frontmatter.templateKey === 'interview-post' ||
          post.node.frontmatter.templateKey === 'review-post'
      )
      .slice(4, 12);
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section home">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <FeaturedPosts posts={this.getFeaturedPosts(posts)} />

            <div className="columns">
              <div class="more-recent column is-two-thirds">
                <h3>More recent articles</h3>
                <MoreRecentPosts posts={this.getMoreRecentPosts(posts)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 1240) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
