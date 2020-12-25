Rails.application.routes.draw do
  post "signup", to: "users#create"
  post "/signin", to: "sessions#create"
  resources :users, only: [:show, :update]
  resources :creams, only: :index
  resources :cream_purchases, only: :create
end
