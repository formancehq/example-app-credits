const app = require('express').Router();
const ledger = require('../ledger');
const script = require('../script');
const catalog = require('../data/catalog');

app.get('/catalog', (req, res) => {
  res.json(catalog.getAll());
});

app.get('/catalog/:id', (req, res) => {
  res.json(catalog.get(req.params['id']));
});

app.post('/purchase', async (req, res) => {
  const item = catalog.get(req.body.id);

  if (!item) {
    return res.json({ok: false});
  }

  const [asset, amount] = item.price;

  const vars = {
    payment: 'payments:001',
    price: {amount, asset},
    user: `users:${res.locals['user-id']}`,
  };

  const r = await ledger.execute(script('purchase.num'), vars);

  res.json(r);
});

module.exports = app;