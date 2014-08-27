class RecipesController < ApplicationController

	skip_before_filter  :verify_authenticity_token

	def index
		render json: Recipe.all
	end

	def create
		@recipe = Recipe.new(user_params)

		if @recipe.save
			render :json => @recipe
		else
			render :json =>{ :errors => @recipe.errors.full_messages }
		end
	end

	def show
		render json: Recipe.find(params[:id])
	end

	private

	def user_params
		params.require(:recipe).permit(:name, :description)
	end
end