class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :img_url
      t.integer :age
      t.string :sex
      t.string :breed
      t.string :temperment
      t.string :personality
      t.belongs_to :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
