const data = require('../data/catalog.json');

class Catalog {
  constructor(data) {
    this.data = data;
  }

  get(id) {
    const r = this.data.items.filter(e => e.id == id);

    if (r.length == 0) {
      return null;
    }

    return r[0];
  }

  getAll() {
    return this.data;
  }
}

module.exports = new Catalog(data);