class Apartment < ApplicationRecord
  validates :address, :city, :state, :bedroom_count, :bathroom_count, presence: true
end
