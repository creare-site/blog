module.exports = {
  siteTitle: 'Blog',
  siteDescription: 'WebsiteMarket',
  authorName: 'WebsiteMarket',
  twitterUsername: 'websitemarketro',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  Automation geek 😎.<br>
  Proiecte: <a href="https://websitemarket.ro">WebsiteMarket</a>, <a href="https://appseed.us">AppSeed</a>. 
  Ma gasiti si pe <a href="https://dev.to/sm0ke">Dev.to</a> si <a href="https://twitter.com/Sm0keDev">Twitter</a>
  `,
  siteUrl: 'https://blog.websitemarket.ro/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/logo.png',
  postsPerPage: 5,
  disqusShortname: '',
  headerTitle: 'WebsiteMarket',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Despre Proiect',
      url: '/about',
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com/creare-site/blog',
  },
  footerLinks: [
    {
      sectionName: 'Link-uri',
      links: [
        {
          label: 'WebsiteMarket',
          url: 'https://websitemarket.ro',
        },
      ],
    },
    {
      sectionName: 'Social',
      links: [
        {
          label: 'Facebook',
          url: 'https://www.facebook.com/Websitemarketro/',
        }
      ],
    },
  ],
}
