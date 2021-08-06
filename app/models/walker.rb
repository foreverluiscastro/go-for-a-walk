class Walker < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :city, presence: true
    validates :state, presence: true
    has_many :appointments
    has_many :clients, through: :appointments
end
