class RenameRecipeIngredientsToIngredients < ActiveRecord::Migration
  def change
  	rename_table :recipe_ingredients, :ingredients
  end
end
