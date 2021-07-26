class Client < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :appointments
    has_many :walkers, through: :appointments
    has_many :dogs
    has_one :post
end
