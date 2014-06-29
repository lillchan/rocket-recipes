class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :item_id, :quantity, :measurement_id
end