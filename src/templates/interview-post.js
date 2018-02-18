import React from 'react';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Img from 'gatsby-image';
import FacebookProvider, { Comments } from 'react-facebook';
import Content, { HTMLContent } from '../components/Content';

export const InterviewPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImage,
  title,
  path,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section interview-post">
      {helmet || ''}
      <Header alt={title} image={featuredImage} />
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            <FacebookProvider className="fb-comments" appId="1994812974114706">
              <Comments
                href={`http://www.ravereviewz.net/${path}`}
                width="100%"
              />
            </FacebookProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <InterviewPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Blog | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      featuredImage={post.frontmatter.featuredImage}
      path={post.frontmatter.path}
    />
  );
};

export const pageQuery = graphql`
  query InterviewPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "MMMM DD, YYYY")
        title
        description
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
`;
