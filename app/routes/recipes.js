import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('recipe');
  },

  setupController: function (controller) {
    controller.set('recipe', {});

    return this._super.apply(this, arguments);
  }
});
