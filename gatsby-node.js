const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/page.js');
    resolve(
      graphql(
        `
          {
            allContentfulPage {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPage.edges;
        posts.forEach((post) => {
          createPage({
            path: post.node.slug ? `/${post.node.slug}/` : '/home',
            component: blogPost,
            context: {
              id: post.node.id,
              slug: post.node.slug,
            },
          });
        });
      }),
    );
  });
};
