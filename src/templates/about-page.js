import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  const people = [
    { name: 'Kamran', img: require('../images/kamran.jpg'), role: 'Director' },
    { name: 'Sean', img: require('../images/sean.jpg'), role: 'Editor' },
    { name: 'Jay', img: require('../images/jay.jpg'), role: 'Algorithms' },
    // { name: 'Thomas', img: require('../images/thomas.jpg'), role: 'Field Agent' },
    { name: 'Magdalena', img: require('../images/mag.jpg'), role: 'Journo' },
    { name: 'Nick', img: require('../images/nick.jpg'), role: 'Graphics' },
  ];

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <PageContent className="content" content={content} />
              <div className="people">
                {people.map(person => (
                  <div className="person">
                    <img src={person.img} />
                    <h4>{person.name}</h4>
                    <h5>{person.role}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
