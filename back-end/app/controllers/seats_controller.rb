class SeatsController < ApplicationController
  def index
    seats = Seat.all
    render json: seats
  end
end
