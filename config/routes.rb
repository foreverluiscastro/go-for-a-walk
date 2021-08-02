Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/session", to: "sessions#show"
  post "/signup", to: "clients#create"
  get "/my-profile", to: "clients#show"
  get "/my-dogs", to: "dogs#index"
  post "/posts", to: "posts#create"
  get "/posts", to: "posts#index"
end
