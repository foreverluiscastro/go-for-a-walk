class CreateWalkers < ActiveRecord::Migration[6.1]
  def change
    create_table :walkers do |t|
      t.string :username
      t.string :password_digest
      t.string :image_url
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :bio
      t.string :city
      t.string :state

      t.timestamps
    end
  end
end
