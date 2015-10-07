import config from '../config/environment';

export function initialize() {
  Stripe.setPublishableKey(config['ember-stripe'].key);
}

export default {
  name: 'stripe',
  initialize: initialize
};
