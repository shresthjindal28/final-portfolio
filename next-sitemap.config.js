/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.shresthjindal.com',  // 👈 use the www version
  generateRobotsTxt: true,
  sitemapSize: 5000,
  // Exclude non-page assets and private routes from sitemap
  exclude: [
    '/opengraph-image.png',
    '/icon0.svg',
    '/icon1.png',
    '/apple-icon.png',
    '/logo.png',
    '/twitter-card.png',
    '/web-app-manifest-192x192.png',
    '/web-app-manifest-512x512.png',
    '/manifest.json',
    '/robots.txt',
    '/sitemap.xml',
    '/sitemap-0.xml',
    '/privatePage',
  ],
}
