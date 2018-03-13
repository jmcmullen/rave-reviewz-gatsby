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
  const url = `https://magazine.ravereviewz.net/${path}`;

  const meta = [
    { name: 'description', content: description },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: url },
    { property: 'og:image', content: featuredImage.childImageSharp.sizes[0] },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { name: 'twitter:card', content: 'summary' },
    {
      name: 'twitter:image:src',
      content: featuredImage.childImageSharp.sizes[0],
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ];

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
              <Comments href={url} width="100%" />
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
      helmet={<Helmet title={`Rave Reviewz: ${post.frontmatter.title}`} />}
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
