import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Script from 'react-load-script';
import graphql from 'graphql';

export default class InterviewsPage extends React.Component {
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
      <section className="interviews">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={() => this.handleScriptLoad()}
        />
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">
              Latest Interviews
            </h1>
          </div>
          {posts
            .filter(
              post => post.node.frontmatter.templateKey === 'interview-post'
            )
            .map(({ node: post }) => (
              <div
                className="content interview-preview"
                style={{ border: '1px solid #eaecee' }}
                key={post.id}
              >
                <Img
                  className="img-preview"
                  alt={post.frontmatter.title}
                  sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
                />
                <div className="text">
                  <p>
                    <Link
                      className="has-text-primary"
                      to={post.frontmatter.path}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <br />
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link
                      className="button is-small"
                      to={post.frontmatter.path}
                    >
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query InterviewsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
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
