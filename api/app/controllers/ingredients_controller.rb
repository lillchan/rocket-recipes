class IngredientsController < ApplicationController
	def index
		render json: Ingredient.all
	end

	def create
		@ingredient = Ingredient.new(params[:ingredient])
	end

	def show
		render json: Ingredient.find(params[:id])
	end
end