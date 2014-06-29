# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Recipe.delete_all
Ingredient.delete_all
Item.delete_all
Measurement.delete_all

ginger_cookies = Recipe.create(name: 'Williams Sonoma Ginger Cookies', description: 'Blah', source: 'More Blah')
corn_chowder = Recipe.create(name: 'Vegan Corn Chowder', description: 'Blah', source: 'More Blah')
apple_pie = Recipe.create(name: 'Caramelize Apple Pie', description: 'Blah', source: 'More Blah')

blah = Item.create(name: 'BLAH', description: 'BLOOH')
blah_blah = Item.create(name: 'BLAHBLAH', description: 'BLOOHBLAHBLOOH')
blooh = Item.create(name: 'BLOOH', description: 'BLOOHBLAHBLOOHOOH')

ounce = Measurement.create(name: 'oz')
pound = Measurement.create(name: 'lb')
cup = Measurement.create(name: 'cup(s)')

ginger_cookies.ingredients.create(:item => blah, :measurement => ounce, :quantity => 10)
ginger_cookies.ingredients.create(:item => blah_blah, :measurement => cup, :quantity => 100)
corn_chowder.ingredients.create(:item => blah, :measurement => ounce, :quantity => 20)
corn_chowder.ingredients.create(:item => blooh, :measurement => pound, :quantity => 1)
apple_pie.ingredients.create(:item => blah_blah, :measurement => cup, :quantity => 5)

