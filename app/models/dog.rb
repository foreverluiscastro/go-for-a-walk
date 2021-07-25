class Dog < ApplicationRecord
    belongs_to :client
    validates :name, presence: true
    validates :breed, presence: true
end
