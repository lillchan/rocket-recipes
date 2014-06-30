import Ember from 'ember';
import DS from 'ember-data';

var Ingredient = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

var ingredientNames = [
  'broccoli',
  'tofu',
  'fish'
];

Ingredient.reopenClass({
  FIXTURES: Ember.$.map(ingredientNames, function (name, index) {
    return {
      id: index + 1,
      name: name
    };
  })
});

export default Ingredient;
