class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  has_many :cream_purchases, dependent: :destroy
  validates :nick_name, presence: true, on: :create
  validates :password, presence: true, on: :create
  validates :tel, presence: true, uniqueness: true
  validates :full_name, presence: true
  validates :age, presence: true, numericality: { only_integer: true }
  validates :sex, presence: true
  validates :address, presence: true
  validates :point, presence: true, on: :create

  def invalid user
    if user.save
      user
    else
      raise BadRequest, errors.full_messages
    end
  end
end
