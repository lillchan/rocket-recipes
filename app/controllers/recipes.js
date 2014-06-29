import Ember from 'ember';

export default Ember.Controller.extend({

  recipe: {},

  actions: {
    newRecipe: function () {

      var RecipesController = this;

      RecipesController.store.createRecord('recipe', this.get('recipe')).save().then(function () {
        RecipesController.set('recipe', {});
      });
    }
  }

});
