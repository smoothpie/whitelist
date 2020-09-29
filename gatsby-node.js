const path = require("path");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  createPage({
    path: '/brand/*',
    matchPath: '/brand/:id',
    component: path.resolve(`src/pages/brand.tsx`),
  });
}