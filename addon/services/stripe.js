import Ember from 'ember';

export default Ember.Service.extend({
  createToken(params) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      const handler = Ember.run.bind(this, function(status, response) {
        if (response.error) {
          reject(response);
        } else {
          resolve(response.id);
        }
      });

      Stripe.card.createToken(params, handler);
    });
  }
});
