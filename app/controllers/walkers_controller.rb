class WalkersController < ApplicationController
    # POST /signup-to-walk
    def create
        walker = Walker.create(walker_params)
        if walker.valid?
            session[:walker_id] = walker.id
            render json: walker, status: :created
        else
            render json: { errors: walker.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # GET /walker
    def show
        walker = Walker.find_by(id: session[:walker_id])
        if walker
            render json: walker, status: :created
        else
            render json: { error: "Not Authorized" }, status: :unauthorized
        end
    end

    # PATCH /walker
    def update
        walker = Walker.find_by(id: session[:walker_id])
        walker.update(walker_params)
        if walker.valid?
            render json: walker
        else
            render json: { errors: [ walker.errors.full_messages ] }, status: :unprocessable_entity
        end
    end

    private

    def walker_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :age, :image_url, :bio, :city, :state)
    end
end
