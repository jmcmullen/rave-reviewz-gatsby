const path = require('path');

exports.onCreateNode = ({
  node,
  getNode,
  loadNodeContent,
  boundActionCreators,
}) => {
  const { frontmatter } = node;
  if (frontmatter) {
    const { featuredImage, title } = frontmatter;
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
    const posts = result.data.allMarkdownRemark.edges;

    if (result.errors) {
      console.log(`Result = `, result);
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    return posts.forEach(({ node }, index) => {
      const pagePath = node.frontmatter.path;
      const prev = index === 0 ? false : posts[index - 1].node;
      const next = index === posts.length - 1 ? false : posts[index + 1].node;

      if (pagePath !== 'external') {
        createPage({
          path: pagePath,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            path: pagePath,
            prev,
            next,
          },
        });
      }
    });
  });
};
