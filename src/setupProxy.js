const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://learnraact.herokuapp.com/',
      changeOrigin: true,
    })
  );
};