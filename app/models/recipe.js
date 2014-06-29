import Ember from 'ember';
import DS from 'ember-data';

var Recipe = DS.Model.extend({
  name: DS.attr('name')
});

var recipeNames = [
  'Bacon Pork Tenderloin',
  'Fluffy Cake Doughnuts',
  'Bill\'s Sausage Gravy'
];

Recipe.reopenClass({
  FIXTURES: Ember.$.map(recipeNames, function (name, index) {
    return {
      id: index + 1,
      name: name
    }
  })
});

window.console.log(Recipe);

export default Recipe;
