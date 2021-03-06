Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/search/:query', to: 'cocktails#search'
    end
  end

  get 'doses/new'
  get 'doses/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'cocktails#index'
  resources :cocktails, only: [:create, :index, :new, :show] do
    resources :doses, only: [:new, :create, :destroy]
    resources :reviews, only: [:new, :create]
  end
end
