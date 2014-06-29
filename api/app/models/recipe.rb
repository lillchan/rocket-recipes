class Recipe < ActiveRecord::Base
	has_many :ingredients
	has_many :items, :through => :ingredients
end
