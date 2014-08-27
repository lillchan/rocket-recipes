class IngredientsController < ApplicationController
	
	skip_before_filter  :verify_authenticity_token

	def index
		render json: Ingredient.all
	end

	def create
		@ingredient = Ingredient.new(user_params)
		if @ingredient.save
			render :json => @ingredient
		else
			render :json => { :errors => @ingredient.errors.full_messages }
		end
	end

	def show
		render json: Ingredient.find(params[:id])
	end

	def update
		@ingredient = Ingredient.find(params[:id])

		if @ingredient.update_attributes(user_params)
			render :json => @ingredient
		else
			render :json => { :errors => @ingredient.errors.full_messages }
		end
	end

	private

	def user_params
		params.require(:ingredient).permit(:name, :description)
	end
end