import Ember from 'ember';

export default Ember.Controller.extend({

  ingredient: {},

  actions: {
    newIngredient: function () {

      var IngredientsController = this;

      IngredientsController.store.createRecord('ingredient', this.get('ingredient')).save().then(function () {
        IngredientsController.set('ingredient', {});
      });
    }
  }
});
