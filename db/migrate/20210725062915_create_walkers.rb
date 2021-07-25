class CreateDogWalkers < ActiveRecord::Migration[6.1]
  def change
    create_table :dog_walkers do |t|

      t.timestamps
    end
  end
end
