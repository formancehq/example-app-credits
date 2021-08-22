const app = require('express').Router();
const ledger = require('../ledger');
const script = require('../script');

app.get('/users', (req, res) => {
  res.json({
    ok: true,
  });
});

app.post('/users/:id/funding', async (req, res) => {
  const r = await ledger.execute(script('mint.num'), {
    value: {
      amount: 5000,
      asset: 'COIN',
    },
    user: req.params['id'],
  });

  res.json(r);
});

module.exports = app;