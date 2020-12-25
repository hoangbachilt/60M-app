class SeatBooking < ApplicationRecord
  belongs_to :user
  belongs_to :seat
end
