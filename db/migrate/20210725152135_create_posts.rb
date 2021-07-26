class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.datetime :appointment_date

      t.timestamps
    end
  end
end
