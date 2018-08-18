Rails.application.routes.draw do
  root "static_pages#root"

  resources :apartments, defaults: {format: :json}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'apartments/search', to: "apartments#search", defaults: {format: :json}
end
