class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.integer :item_id
      t.integer :quantity
      t.integer :measurement_id

      t.timestamps
    end
  end
end
