Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/session", to: "sessions#show"
  post "/signup", to: "clients#create"
  get "/client", to: "clients#show"
end
