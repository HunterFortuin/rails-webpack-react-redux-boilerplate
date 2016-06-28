Rails.application.routes.draw do
  get 'dashboard/index'

  get '/admin' => 'dashboard#admin'

  root 'dashboard#index'
end
