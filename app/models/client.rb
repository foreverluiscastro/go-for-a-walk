class Client < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :appointments
    has_many :dog_walkers, through: :appointments
end
