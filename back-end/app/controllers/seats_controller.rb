class SeatsController < ApplicationController
  def index
    seats = Seat.all
    render json: seats
  end

  def update
    seat = Seat.find(params[:id])
    if current_user.point > 0
      seat.update status: params[:status]
      current_user.update point: (current_user.point - 1)
    else
      render json: {messages: "Your point is over"}
    end
  end
end
