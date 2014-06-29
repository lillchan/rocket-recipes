import Ember from 'ember';
import DS from 'ember-data';

var Ingrediant = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

var ingrediantNames = [
  'broccoli',
  'tofu',
  'fish'
];

Ingrediant.reopenClass({
  FIXTURES: Ember.$.map(ingrediantNames, function (name, index) {
    return {
      id: index + 1,
      name: name
    };
  })
});

export default Ingrediant;
