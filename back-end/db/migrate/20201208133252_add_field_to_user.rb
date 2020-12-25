class AddFieldToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :age, :integer
    add_column :users, :sex, :string
    add_column :users, :address, :string
    add_column :users, :link_fb, :string
  end
end
