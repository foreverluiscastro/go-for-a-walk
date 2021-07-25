class DogWalker < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :appointments
    has_many :clients, through: :appointments
end
