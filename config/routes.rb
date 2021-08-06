Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/session", to: "sessions#show"
  post "/signup", to: "clients#create"
  get "/client", to: "clients#show"
  patch "/client", to: "clients#update"
  get "/dogs", to: "dogs#index"
  post "/dogs", to: "dogs#create"
  get "/dogs/:id", to: "dogs#show"
  delete "/dogs/:id", to: "dogs#destroy"
  post "/posts", to: "posts#create"
  get "/posts", to: "posts#index"
  get "/posts/:id", to: "posts#show"
  patch "/posts/:id", to: "posts#update"
  delete "/posts/:id", to: "posts#destroy"
end
