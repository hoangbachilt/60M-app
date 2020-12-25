class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :nick_name
      t.string :full_name
      t.string :tel
      t.string :image_name
      t.text :information
      t.integer :point

      t.timestamps
    end
  end
end
