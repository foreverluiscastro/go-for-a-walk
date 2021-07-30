class DogsController < ApplicationController
    # GET /my-dogs
    def index
        if session[:client_id]
            client = Client.find(session[:client_id])
            dogs = client.dogs
            render json: dogs, include: :client
        else
            render json: { errors: [ "Not Authorized" ]}, status: :unauthorized
        end
    end
end
