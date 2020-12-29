class SeatBookingsController < ApplicationController
  def index
    seat_bookings = SeatBooking.all
    render json: seat_bookings
  end
end
