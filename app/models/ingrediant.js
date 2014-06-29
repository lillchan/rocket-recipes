import DS from 'ember-data';

var Ingrediant = DS.Model.extend({
  name: DS.attr('string')
});

Ingrediant.FIXTURES = [
 {
   id: 1,
   name: 'broccoli'
 },
 {
   id: 2,
   name: 'tofu'
 },
 {
   id: 3,
   name: 'fish'
 }
];

export default Ingrediant;
