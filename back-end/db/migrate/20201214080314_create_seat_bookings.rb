class CreateSeatBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :seat_bookings do |t|
      t.references :user, null: false, foreign_key: true
      t.references :seat, null: false, foreign_key: true

      t.timestamps
    end
  end
end
