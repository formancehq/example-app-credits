const numary = require('numary');
const cluster = numary();
const ledger = cluster.getLedger('example-app-credits');

module.exports = ledger;