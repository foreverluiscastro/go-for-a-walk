class PostsController < ApplicationController
    # POST /job-postings
    def create
        if session[:client_id]
            client = Client.find(session[:client_id])
            post = client.posts.create(post_params)
            if post.valid?
                render json: post, include: :client, status: :created
            else
                render json: { error: [ "Invalid input. Check the information and try again." ] }, status: :unprocessable_entity
            end
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # GET /job-postings
    def index

    end

    # DELETE /job-postings/:id
    def destroy
        if session[:walker_id]
            post = Post.find_by(id: params[:id])
            if post
                post.delete
                head :no_content
            else
                render json: { error: [ "Could not complete request. Please Try again" ] }, status: :unprocessable_entity
            end
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    private

    def post_params
        params.permit(:client_id, :appointment_date)
    end
end
