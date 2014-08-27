import Ember from 'ember';

export default Ember.Controller.extend({

  ingredient: {},

  actions: {
    newIngredient: function () {

      var IngredientsController = this;

      IngredientsController.set('ingredient.error', null);

      var newIngredient = IngredientsController.store.createRecord('ingredient', IngredientsController.get('ingredient'));

      newIngredient.save().then(function (ingredient) {
        IngredientsController.transitionToRoute('ingredient', ingredient);
      }).catch(function (error) {
        Ember.Logger.warn(error);
        IngredientsController.set('ingredient.error', error);
        newIngredient.destroyRecord();
      });
    }
  }
});
