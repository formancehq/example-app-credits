const app = require('express').Router();
const ledger = require('../ledger');

app.get('/me', async (req, res) => {
  const r = await ledger.getAccount(`users:${res.locals['user-id']}`);

  res.json(r);
});

module.exports = app;