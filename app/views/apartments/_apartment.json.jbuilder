json.extract! apartment, :id, :created_at, :updated_at, :address, :city, :state, :bedroom_count, :bathroom_count
json.url apartment_url(apartment, format: :json)
