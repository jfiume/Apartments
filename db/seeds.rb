# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Apartment.destroy_all
apartment_1 = Apartment.create(
  address: '123 Abc St.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 2,
  bathroom_count: 2
)

apartment_2 = Apartment.create(
  address: '321 Cba Way.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 1,
  bathroom_count: 1
)

apartment_3 = Apartment.create(
  address: '456 Zyx Dr.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 2,
  bathroom_count: 1
)

apartment_4 = Apartment.create(
  address: '654 Xyz Ct.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 2,
  bathroom_count: 1.5
)

apartment_5 = Apartment.create(
  address: '789 Def St.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 4,
  bathroom_count: 4
)

apartment_6 = Apartment.create(
  address: '987 Fed Way.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 3,
  bathroom_count: 3
)

apartment_7 = Apartment.create(
  address: '1 Ghi Dr.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 3,
  bathroom_count: 2.5
)

apartment_8 = Apartment.create(
  address: '2 Jkl Ct.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 3,
  bathroom_count: 2
)

apartment_9 = Apartment.create(
  address: '3 Mno Ave.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 3,
  bathroom_count: 2
)

apartment_10 = Apartment.create(
  address: '4 Pqr Ave.',
  city: 'Madison',
  state: 'Wi',
  bedroom_count: 2,
  bathroom_count: 2.5
)
