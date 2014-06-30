class RenameRecipeIngredients1ToRecipeIngredients < ActiveRecord::Migration
  def change
  	rename_table :recipe_ingredients1, :recipe_ingredients
  end
end
