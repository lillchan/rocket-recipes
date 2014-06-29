import Ember from 'ember';
import DS from 'ember-data';

var Recipe = DS.Model.extend({
  name: DS.attr('string'),
  desctription: DS.attr('string'),
  source: DS.attr('string')
});

var recipeNames = [
  'Bacon Pork Tenderloin',
  'Fluffy Cake Doughnuts',
  'Bill\'s Sausage Gravy',
  'Honey Ice Cream and Honey Snaps'
];

Recipe.reopenClass({
  FIXTURES: Ember.$.map(recipeNames, function (name, index) {
    return {
      id: index + 1,
      name: name
    };
  })
});

export default Recipe;
