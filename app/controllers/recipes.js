import Ember from 'ember';

export default Ember.Controller.extend({

  recipe: {},

  actions: {
    newRecipe: function () {

      var RecipesController = this;

      RecipesController.set('recipe.error', null);

      var newRecipe = RecipesController.store.createRecord('recipe', RecipesController.get('recipe'));

      newRecipe.save().then(function (recipe) {
        RecipesController.transitionToRoute('recipe', recipe);
      }).catch(function (error) {
        Ember.Logger.warn(error);
        RecipesController.set('recipe.error', error);
        newRecipe.destroyRecord();
      });
    }
  }

});
