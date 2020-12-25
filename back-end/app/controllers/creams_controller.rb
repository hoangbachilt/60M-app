class CreamsController < ApplicationController
  before_action :authorized, except: :index
  def index
    creams = Cream.all
    render json: creams
  end
end
