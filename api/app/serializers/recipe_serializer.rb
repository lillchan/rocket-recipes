class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :source
end
