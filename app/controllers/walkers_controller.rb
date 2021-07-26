class WalkersController < ApplicationController
    # POST /signup-to-walk
    def create
        walker = Walker.create(walker_params)
        if walker.valid?
            session[:walker_id] = walker.id
            render json: walker, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /my-profile
    def show
        walker = Walker.find_by(id: session[:walker_id])
        if walker
            render json: walker, status: :created
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    private

    def walker_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio, :location)
    end
end
