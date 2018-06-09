import React from 'react';
import Link from 'gatsby-link';

export default ({ prev, next, templateKey }) => {
  console.log(next.frontmatter.templateKey == 'interview-post');
  return (
    <div className="continue">
      <h1>Related Articles</h1>
      {prev &&
        prev.frontmatter.templateKey == templateKey && (
          <Link className="link prev" to={prev.frontmatter.path}>
            {prev.frontmatter.title}
          </Link>
        )}
      {next &&
        prev.frontmatter.templateKey === 'interview-post' && (
          <Link className="link next" to={next.frontmatter.path}>
            {next.frontmatter.title}
          </Link>
        )}
    </div>
  );
};

export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "/img/babylon.jpg" }) {
      childImageSharp {
        resolutions(width: 125, height: 125) {
          src
          srcSet
          width
          height
        }
      }
    }
  }
`;
