class RecipeSerializer < ActiveModel::Serializer
	# embed :ids, include: true
	attributes :id, :name, :description, :source
	has_many :ingredients
end