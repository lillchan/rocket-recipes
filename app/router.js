import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RocketRecipesENV.locationType
});

Router.map(function() {
  this.resource('recipe', { path: '/recipe/:recipe_id' });
  this.route('recipes');
  this.resource('ingrediant', { path: '/ingredient/:ingrediant_id' });
  this.route('ingrediants');
});

export default Router;
