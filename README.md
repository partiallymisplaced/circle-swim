# Circle Swim

### Summary

This project was created as the final part of Udacity's Front-end Nanodegree course. The goal was to create an app that fetches location data from a 3rd party API and renders it using the Google Maps Javascript API with React.

I used the City of Seattle's [Open Data Portal](https://data.seattle.gov/), powered by Socrata (See API [here](https://dev.socrata.com/foundry/data.seattle.gov/ppq2-qxkx)) to get data about public swimming pools in the City of Seattle. The viewer can see which of the pools are indoor or outdoor.

### How to view

You can preview the app at https://partiallymisplaced.github.io/circle-swim/

#### Running the project locally
To review the code and test the app in a develompent environment:

1. Clone this repository to a local directory of your choice with `$ git clone https://github.com/partiallymisplaced/circle-swim.git`
2. Install all project dependencies with `npm install` 
3. Start the development server with `npm start`
4. View in browser on port 3000 `http://localhost:3000/`

#### Testing functionality
You can create a local build version which will make use of the service worker provided by `create-react-app`. To do so:

1. Create a build using `npm run build`
2. Serve build 
    * If you don't have a preferred method to do so, `create-react-app` recommends using the [Serve](https://www.npmjs.com/package/serve) package. Install it using `npm i serve`. 
    * Run the serve with `serve` 
    * View the app at `http://localhost:5000` 

### Dependencies

Dependencies are listed in this project's [package.json](https://github.com/partiallymisplaced/my-reads/blob/master/package.json)