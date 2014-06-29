import Ember from 'ember';

export default Ember.Controller.extend({

  ingrediant: {},

  actions: {
    newIngrediant: function () {

      var IngrediantsController = this;

      IngrediantsController.store.createRecord('ingrediant', this.get('ingrediant')).save().then(function () {
        IngrediantsController.set('ingrediant', {});
      });
    }
  }
});
