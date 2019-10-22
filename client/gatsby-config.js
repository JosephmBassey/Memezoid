module.exports = {
  siteMetadata: {
    author: '@Bvlktech',
    title: 'Memezoid',
    siteUrl: 'https://www.memezoid.netlify.com',
    description: 'Share Memes with the world.'
  },
  proxy: {
    url: 'http://localhost:5000',
    prefix: '/api'
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/src/images`,
        name: 'images'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#ffffff',
        icon: 'src/images/icon.png',
        short_name: 'Memezoid',
        theme_color: '#2e2e2e',
        display: 'minimal-ui',
        name: 'Memezoid',
        start_url: '/'
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [''],
        pluginConfig: {
          respectDNT: true,
          head: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        color: '#ff0000'
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto'
          }
        ]
      }
    }
  ]
}