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
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
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
                render json: { error: [ "Invalid input. Check the information and try again." ] }, status: :unprocessable_entity
            end
        else
            render json: { error: [ "Not Authorized" ] }, status: :unauthorized
        end
    end

    private

    def appointment_params
        params.permit(:client_id, :walker_id, :appointment_date, :notes)
    end
end
