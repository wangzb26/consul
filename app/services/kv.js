import Service, { inject as service } from '@ember/service';
export default Service.extend({
  store: service('store'),
  // this one gives you the full object so key,values and meta
  findBySlug: function(key, dc) {
    return this.get('store').queryRecord('kv', {
      key: key,
      dc: dc,
    });
  },
  // this one only gives you keys
  // TODO: refactor this into one method with an arg to specify what you want
  // https://www.consul.io/api/kv.html
  findAllBySlug: function(key, dc) {
    // TODO: [sic] seperator
    return this.get('store').query('kv', {
      key: key,
      dc: dc,
      seperator: '/',
    });
  },
  create: function() {
    return this.get('store').createRecord('kv');
  },
});
