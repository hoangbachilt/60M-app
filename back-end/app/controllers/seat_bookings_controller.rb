class SeatBookingsController < ApplicationController
  def index
    seat_bookings = SeatBooking.all
    render json: seat_bookings
  end

  def create
    if current_user.point > 0
      seat_booking = SeatBooking.create user_id: params[:user_id],
                                        seat_id: params[:seat_id]
    else
      render json: {messages: "Your point is over"}
    end
  end
end
