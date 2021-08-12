class PostsController < ApplicationController
    # POST /posts
    def create
        if session[:client_id]
            client = Client.find(session[:client_id])
            post = client.posts.create(post_params)
            if post.valid?
                render json: post, include: :client, status: :created
            else
                render json: { errors: [ "Invalid input. Check the information and try again." ] }, status: :unprocessable_entity
            end
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # GET /posts
    def index
        if session[:walker_id]
            posts = Post.all
            render json: posts, include: :client
        elsif session[:client_id]
            client = Client.find(session[:client_id])
            post = client.posts
            render json: post, include: :client
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # GET /posts/:id
    def show
        if session[:walker_id]
            post = Post.find(params[:id])
            client = post.client
            if post.valid?
                render json: post, include: :client
            else
                render json: { errors: [ "Could not complete request. please try again" ] }, status: :unprocessable_entity
            end
        elsif session[:client_id]
            client = Client.find(session[:client_id])
            post = client.posts.find(params[:id])
            if post.valid?
                render json: post, include: :client
            else
                render json: { errors: [ "Not Authorized" ]}, status: :unauthorized
            end
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # PATCH /posts/:id
    def update
        if session[:client_id]
            client = Client.find_by(id: session[:client_id])
            post = client.posts.find(params[:id])
            if post.valid?
                post.update(post_params)
                render json: post, include: :client
            else
                render json: { errors: ["Unprocessable Entity"]}, status: :unprocessable_entity
            end
        else
            render json: { errors: [ "Not Authorized" ]}, status: :unauthorized
        end
    end

    # DELETE /posts/:id
    def destroy
        if session[:walker_id]
            post = Post.find_by(id: params[:id])
            if post
                post.delete
                head :no_content
            else
                render json: { error: [ "Could not complete request. Please try again" ] }, status: :unprocessable_entity
            end
        elsif session[:client_id]
            post = Post.find_by(id: params[:id])
            if post
                post.delete
                head :no_content
            else
                render json: { error: [ "Could not complete request. Please try again" ] }, status: :unprocessable_entity
            end
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    private

    def post_params
        params.permit(:client_id, :date, :time, :trip_time_in_minutes, :number_of_dogs, :notes)
    end
end
