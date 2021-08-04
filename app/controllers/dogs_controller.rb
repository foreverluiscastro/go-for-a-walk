class DogsController < ApplicationController
    # POST /dogs
    def create
        if session[:client_id]
            client = Client.find(session[:client_id])
            dog = client.dogs.create(dog_params)
            if dog.valid?
                render json: dog, include: :client, status: :created
            else
                render json: { errors: [ "Invalid input. Check the information and try again." ] }, status: :unprocessable_entity
            end
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # GET /dogs
    def index
        if session[:client_id]
            client = Client.find(session[:client_id])
            dogs = client.dogs
            render json: dogs, include: :client
        else
            render json: { errors: [ "Not Authorized" ]}, status: :unauthorized
        end
    end

    private

    def dog_params
        params.permit(:client_id, :name, :img_url, :age, :sex, :breed, :temperment, :personality)
    end
end
