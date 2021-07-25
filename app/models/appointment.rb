class Appointment < ApplicationRecord
    belongs_to :dog_walker
    belongs_to :client
end
