class CreateCreamPurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :cream_purchases do |t|
      t.references :user, null: false, foreign_key: true
      t.references :cream, null: false, foreign_key: true
      t.boolean :status

      t.timestamps
    end
  end
end
