class SessionsController < ApplicationController

    # POST /login
    def create
        walker = Walker.find_by(username: params[:username])
        client = Client.find_by(username: params[:username])
        if walker&.authenticate(params[:password])
            session[:walker_id] = walker.id
            render json: walker
        elsif client&.authenticate(params[:password])
            session[:client_id] = client.id
            render json: client
        else
            render json: { error: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    # GET /session
    def show
        if session[:client_id]
            client = Client.find(session[:client_id])
            render json: client
        elsif session[:walker_id]
            walker = Walker.find(session[:walker_id])
            render json: walker
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # DELETE /logout
    def destroy
        if session[:walker_id]
            session.delete :walker_id
            head :no_content
        elsif session[:client_id]
            session.delete :client_id
            head :no_content
        else
            render json: { error: ["Not Authorized"] }, status: :unauthorized
        end
    end
end
