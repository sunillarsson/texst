module.exports = {
  siteMetadata: {
    title: `Gatsby's skeleton`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `src`, path: `${__dirname}/src/` },
    },
    `gatsby-transformer-remark`,
  ],
}
