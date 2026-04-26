module.exports = {
    siteUrl:"https://new.rosietaxicab.com/", // Fallback for local development
    generateRobotsTxt: true, // Generates robots.txt file
    sitemapSize: 5000,
    changefreq: "daily",
    priority: 0.7,
    transform: async (config, path) => {
        return {
            loc: path,
            lastmod: new Date().toISOString(),
            changefreq: 'weekly',
            priority: 0.7,
        };
    },
    exclude: [
        '/editor/**',
        '/editor',
        '/admin',
        '/admin/**',
        '/bookings',
        '/bookings/**',        
    ],
  };
  