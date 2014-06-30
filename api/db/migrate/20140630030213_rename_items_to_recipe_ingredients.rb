class RenameItemsToRecipeIngredients < ActiveRecord::Migration
  def change
  	rename_table :items, :recipe_ingredients
  end
end
