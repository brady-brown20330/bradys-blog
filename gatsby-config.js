const siteMetadata = {
  title: `Brady Brown's Blog & Portfilio Site`,
  description: `This website is a place for me to showcase things that I'm working on, and a side project to help practice programming.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://bradys-blog.netlify.app/`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  authorName: `Brady Brown`,
}
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`,
          `limelight`,
          'Arvo',
          'Bungee Shade' // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
};