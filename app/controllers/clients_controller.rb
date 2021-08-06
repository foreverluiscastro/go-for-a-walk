class ClientsController < ApplicationController
    # POST /signup
    def create
        client = Client.create(client_params)
        if client.valid?
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: { errors: client.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /client
    def show
        client = Client.find_by(id: session[:client_id])
        if client
            render json: client, status: :created
        else
            render json: { errors: "Not Authorized" }, status: :unauthorized
        end
    end

    # PATCH /client
    def update
        client = Client.find_by(id: session[:client_id])
        client.update(client_params)
        if client.valid?
            render json: client
        else
            render json: { errors: [ client.errors.full_messages ] }, status: :unprocessable_entity
        end
    end

    private

    def client_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :age, :image_url, :bio, :city, :state)
    end
end
