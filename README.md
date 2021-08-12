# Go For A Walk

This app uses a Rails API and React frontend. For ease of deployment, both projects are contained in the same repository. All the React Code is in the `/client` directory during development.

## Setup

To run the app locally, install Rails and React dependencies and set up the database. This app uses Postgresql as a database.

```sh
bundle install
rails db:create db:migrate
npm install --prefix client
sudo service postgresql start
```
## Running the App locally

Click on the icon of a box split down the middle located in your terminal. This will create a Split terminal that will allow you to see the frontend and backend simultaniously. Run each command in it's own respective terminal to start the frontend and backend servers:

```sh
npm start --prefix client
```

```sh
rails s
```

## About the App

I created Go For A Walk mainly because I wanted to practice working with a joins table which in my app is represented by the `Appointments` table. Initially, a `Client` will make a post looking for a `Walker`. Once the `Post` has been published, it will be viewable by any walkers in the vicinity. Once a walker has reviewed a post and decides to accept the job, an appointment is made using the client and the walkers' `ID` numbers and the post is deleted to prevent anyone else from accepting the job. I also wanted to create and app that would have two different roles of a `user` and use client-side routing to display a `client-app` or `walker-app`, depending on who is signed into the sessions hash.