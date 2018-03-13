import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Script from 'react-load-script';
import graphql from 'graphql';

export default class CommunityPage extends React.Component {
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

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="community">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          {posts
            .filter(
              post => post.node.frontmatter.templateKey === 'community-post'
            )
            .map(({ node: post }) => (
              <div className="content commmunity-preview" key={post.id}>
                <a className="post-link" to={post.frontmatter.url}>
                  <Img
                    className="img-preview"
                    alt={post.frontmatter.title}
                    sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                  />
                </a>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query CommunityQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            link
            templateKey
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 600) {
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
