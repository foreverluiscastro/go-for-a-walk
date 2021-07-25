class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :walker, null: false, foreign_key: true
      t.datetime :appointment_date
      t.string :notes

      t.timestamps
    end
  end
end
