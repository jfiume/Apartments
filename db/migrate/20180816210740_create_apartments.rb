class CreateApartments < ActiveRecord::Migration[5.1]
  def change
    create_table :apartments do |t|
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :bedroom_count, null: false
      t.integer :bathroom_count, null: false
      t.timestamps
    end
  end
end
