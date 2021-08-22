const express = require('express');
const cors = require('cors');
const admin = require('./api/admin');
const store = require('./api/store');
const user = require('./api/user');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', (req, res, next) => {
  const user = req.headers['x-user-id'];

  if (!user) {
    return res.status(403).json({
      ok: false,
      err: 'authentication required',
    });
  }

  res.locals['user-id'] = user;
  
  next();
});
app.use('/api/admin', admin);
app.use('/api/store', store);
app.use('/api/user', user);

app.use('/img', express.static(__dirname + '/../assets/img/'));

if (process.env['NODE_ENV'] === 'dev') {
  app.use('/', createProxyMiddleware({
    target: 'http://localhost:3008',
    changeOrigin: true,
  }));
} else {
  app.use('/', express.static(__dirname + '/../assets/dist/'));
}

app.listen(3000);