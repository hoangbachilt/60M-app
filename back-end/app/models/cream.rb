class Cream < ApplicationRecord
  validates :name, presence: true
  validates :price, presence: true
  validates :point, presence: true
end
