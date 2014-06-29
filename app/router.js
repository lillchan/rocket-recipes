import Ember from 'ember';

var Router = Ember.Router.extend({
  location: RocketRecipesENV.locationType
});

Router.map(function() {
  this.resource('recipe', { path: '/recipe/:recipe_id' });
  this.route('recipes');
});

export default Router;
