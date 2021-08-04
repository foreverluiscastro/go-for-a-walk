class Dog < ApplicationRecord
    belongs_to :client
    validates :name, presence: true
    validates :age, presence: true
    validates :breed, presence: true
    validates :sex, presence: true
end
