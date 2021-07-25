class Appointment < ApplicationRecord
    belongs_to :walker
    belongs_to :client
end
