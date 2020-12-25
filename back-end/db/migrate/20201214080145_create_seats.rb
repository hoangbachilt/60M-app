class CreateSeats < ActiveRecord::Migration[6.0]
  def change
    create_table :seats do |t|
      t.string :about
      t.integer :status

      t.timestamps
    end
  end
end
