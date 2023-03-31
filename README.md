# Interview Scheduler

Interview Scheduler is single-page app that is used for scheduling interviews.
The project utilizes HTML, CSS, REACT front-end, AXIOS backend, PostgreSQL for the database and schemas and JEST / CYPRESS / STORYBOOK for testing.


## ScreenShots
Initial Layout
![Initial Layout](https://github.com/cniscoding/-scheduler/blob/master/docs/pic1_layout.png)

Add New Appointment
![Add New Appointment](https://github.com/cniscoding/-scheduler/blob/master/docs/pic2_addNewAppt.png)

Delete Appointment
![Delete Appointment](https://github.com/cniscoding/-scheduler/blob/master/docs/pic3_delete.png)


## Setup & Getting Started
 
1. Clone the repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Seed schemas. Fork and clone scheduler-api at <https://github.com/lighthouse-labs/scheduler-api> into a new directory and follow the README.md
4. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/> in your browser. Edit within env.development if need another port.


## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running PSQL - Scheduler-api

```sh
npm start in the scheduler-api directory to start
/api/debug/reset to reset database
```