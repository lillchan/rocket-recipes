class RenameIngredientsToRecipeIngredients < ActiveRecord::Migration
  def change
  	rename_table :ingredients, :recipe_ingredients1
  end
end
