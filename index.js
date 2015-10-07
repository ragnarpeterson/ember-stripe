/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-stripe',

  contentFor: function(type) {
    if (type === 'body') {
      return '<script type="text/javascript" src="https://js.stripe.com/v2/"></script>';
    }
  },
};
