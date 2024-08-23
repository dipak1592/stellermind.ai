// sitemap.config.js
const fetchBlogPosts = async () => {

    return ['https://betasource.tech/blog/10_Key_Benefits_of_DevOps', 'Transforming-E-commerce-with-AI', 'The-Power-of-DevOps']; // Example blog post IDs
  };
  
  const fetchPortfolioItems = async () => {
    return ['idiamondcloud', 'catchnews', 'wooldridgeboats']; // Example portfolio item IDs
  };
  
  module.exports = {
    siteUrl: 'https://stellarmind.ai',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/node_modules', '/.next'],
    
    transform: async (config, path) => {
      return {
        loc: path, 
        changefreq: config.changefreq,
        priority: path === '/' ? 1.0 : 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    },
  
    additionalPaths: async (config) => {
      const blogPosts = await fetchBlogPosts();
      const portfolioItems = await fetchPortfolioItems();
  
      // Generate paths for blog posts
      const blogPaths = blogPosts.map(slug => config.transform(config, `/blog/getposts?slug=${slug}`));
      
      // Generate paths for portfolio items
      const portfolioPaths = portfolioItems.map(slug => config.transform(config, `/portfolio/getposts?slug=${slug}`));
      
      // Fetch all static pages (e.g., homepage, about, etc.)
      const staticPages = ['/about', '/portfolio', '/blog', '/contact'];
  
      // Combine all paths
      return [
        ...staticPages.map(page => config.transform(config, page)),
        ...blogPaths,
        ...portfolioPaths,
      ];
    },
  };
  