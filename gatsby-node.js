const path = require('path');

exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node;
  if (frontmatter) {
    const { featuredImage } = frontmatter;
    if (featuredImage) {
      if (featuredImage.indexOf('/img') === 0) {
        frontmatter.featuredImage = path.relative(
          path.dirname(node.fileAbsolutePath),
          path.join(__dirname, '/static/', featuredImage)
        );
      }
    }
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            id
            frontmatter {
              templateKey
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      console.log(`Result = `, result);
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const pagePath = node.frontmatter.path;
      if (pagePath !== 'external') {
        createPage({
          path: pagePath,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            path: pagePath,
          },
        });
      }
    });
  });
};
