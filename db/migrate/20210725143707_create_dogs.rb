class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :img_url
      t.string :name
      t.string :breed
      t.string :personality
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
