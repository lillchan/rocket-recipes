import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RocketRecipesENV.locationType
});

Router.map(function() {
  this.resource('recipe', { path: '/recipe/:recipe_id' });
  this.route('recipes');
  this.resource('ingredient', { path: '/ingredient/:ingredient_id' });
  this.route('ingredients');
});

export default Router;
