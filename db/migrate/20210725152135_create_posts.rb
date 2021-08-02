class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.date :date
      t.time :time
      t.integer :number_of_dogs
      t.string :notes

      t.timestamps
    end
  end
end
