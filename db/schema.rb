# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_25_152135) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "walker_id", null: false
    t.date "date"
    t.time "time"
    t.integer "trip_time_in_minutes"
    t.integer "number_of_dogs"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_appointments_on_client_id"
    t.index ["walker_id"], name: "index_appointments_on_walker_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "first_name"
    t.string "last_name"
    t.string "bio"
    t.string "city"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name"
    t.string "img_url"
    t.integer "age"
    t.string "sex"
    t.string "breed"
    t.string "temperment"
    t.string "personality"
    t.bigint "client_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_dogs_on_client_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.date "date"
    t.time "time"
    t.integer "trip_time_in_minutes"
    t.integer "number_of_dogs"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["client_id"], name: "index_posts_on_client_id"
  end

  create_table "walkers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "image_url"
    t.string "first_name"
    t.string "last_name"
    t.string "bio"
    t.string "city"
    t.string "state"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "appointments", "clients"
  add_foreign_key "appointments", "walkers"
  add_foreign_key "dogs", "clients"
  add_foreign_key "posts", "clients"
end
