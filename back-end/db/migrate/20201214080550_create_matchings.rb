class CreateMatchings < ActiveRecord::Migration[6.0]
  def change
    create_table :matchings do |t|
      t.integer :request_user_id
      t.integer :received_user_id
      t.integer :status

      t.timestamps
    end
  end
end
