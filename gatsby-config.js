module.exports = {
  pathPrefix: '/slides-iac-challenger',
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        basePath: ''
      }
    }
  ]
}
