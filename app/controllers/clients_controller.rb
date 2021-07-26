class ClientsController < ApplicationController
    # POST /signup
    def create
        client = Client.create(client_params)
        if client.valid?
            session[:client_id] = client.id
            render json: client, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /me
    def show
        client = Client.find_by(id: session[:client_id])
        walker = Walker.find_by(id: session[:walker_id])
        if client
            render json: user, status: :created
        elsif walker
            render json: walker, status: :created
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    private

    def client_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :location)
    end
end
