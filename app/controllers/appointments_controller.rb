class AppointmentsController < ApplicationController
    # GET /appointments
    def index
        if session[:client_id]
            client = Client.find(session[:client_id])
            appointments = client.appointments
            render json: appointments, include: :walker
        elsif session[:walker_id]
            walker = Walker.find(session[:walker_id])
            appointments = walker.appointments
            render json: appointments, include: :client
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # POST /appointments
    def create
        if session[:walker_id]
            walker = Walker.find(session[:walker_id])
            appointment = walker.appointments.create(appointment_params)
            if appointment.valid?
                render json: appointment, include: :walker, status: :created
            else
                render json: { errors: [ "Invalid input. Check the information and try again." ] }, status: :unprocessable_entity
            end
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # GET /appointments/:id
    def show
        if session[:walker_id]
            walker = Walker.find(session[:walker_id])
            appointment = walker.appointments.find(params[:id])
            render json: appointment
        elsif session[:client_id]
            client = Client.find(session[:client_id])
            appointment = client.appointments.find(params[:id])
            render json: appointment
        else
            render json: { errors: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    # DELETE /appointments/:id
    def destroy
        if session[:walker_id]
            walker = Walker.find(session[:walker_id])
            appointment = walker.appointments.find(params[:id])
            if appointment
                appointment.delete
                head :no_content
            else
                render json: { error: [ "Could not complete request. Please try again" ] }, status: :unprocessable_entity
            end
        elsif session[:client_id]
            client = Client.find(session[:client_id])
            appointment = client.appointments.find(params[:id])
            if appointment
                appointment.delete
                head :no_content
            else
                render json: { error: [ "Could not complete request. Please try again" ] }, status: :unprocessable_entity
            end
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    private

    def appointment_params
        params.permit(:client_id, :walker_id, :date, :time, :trip_time_in_minutes, :number_of_dogs, :notes)
    end
end
