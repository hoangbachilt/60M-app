class CreateCreams < ActiveRecord::Migration[6.0]
  def change
    create_table :creams do |t|
      t.string :name
      t.string :price
      t.string :image_name
      t.integer :point

      t.timestamps
    end
  end
end
