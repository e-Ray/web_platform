# e.Ray Web_Platform

## Greenkeeper
[![Greenkeeper badge](https://badges.greenkeeper.io/e-Ray/web_platform.svg)](https://greenkeeper.io/)
## TravisCI
[![Build Status](https://travis-ci.org/e-Ray/web_platform.svg?branch=master)](https://travis-ci.org/e-Ray/web_platform)
## Codeclimate
[![Code Climate](https://codeclimate.com/github/e-Ray/web_platform/badges/gpa.svg)](https://codeclimate.com/github/e-Ray/web_platform)


## Directory Layout

```
web_platform/
  README.md
  CONTRIBUTING.md
  database.rules.bolt
  database.rules.json
  firebase.json
  LICENSE
  node_modules/
  package.json
  public/
    eray-logo.png
    index.html
    favicon.ico
  PULL_REQUEST_TEMPLATE.md
  README.md
  src/
    _snapshots_/
    api/
    app.test.js
    auth.test.js
    environment/
    index.js
    main.css
    stories/
    ui/
    utils/
  USER_STORIES.md
```


## How to Run / Setup

To get the app running you first need to install a few things. Please follow the steps carefully as every single one is important to get your app running.

### Installation

The first and most important thing you need to install is [Node.js](https://nodejs.org/en/). Click on the link and download the most recent version for your system. Follow the steps on the website if you run into trouble installing it.

Since this app is running on Firebase, you will also need to setup Firebase in order to get your app running. For now, just go to the [Firebase-Website](https://firebase.google.com/) and create an account or login with your existing google-account.


### Setup

After you followed the above steps, we will quickly go through how to setup everything in order to get your app running.

First of all you need to download the app, you can just download the .zip-file from this repository or use 
```sh
$ git clone https://github.com/e-Ray/web_platform.git
```
After you unpacked it and the app is at your desired location we move on to the next step.

The next thing you should do is try to run the app locally on your system. In order to do that, open a terminal and navigate to the location where you put the app in the previous step. After that you need to install some packages with
```sh
$ yarn install
```
If you haven't installed [yarn](https://yarnpkg.com/lang/en/docs/install/) yet, visit their website and install it.
This might take a while since npm will be downloading and installing a lot of packages onto your system. Now you need to compile and launch the app with 
```sh
$ npm start
```
The app should become available at [http://localhost:3000](http://localhost:3000) and will auto-refresh when you make changes to the code or something else.

If everything works you should be good to deploy your app on firebase. If something is not working, check carefully if you went through every step and did everything in order. If it's still not working, check if you downloaded the latest version of the app and if you installed everything else correctly.

### Setting up Firebase

To deploy your app on Firebase you created an account earlier. The next thing to do is adding a new project to your account. Go to [this](https://console.firebase.google.com/) site and create a new project. Open your project and continue below.

The very first thing you want to set up is your database. Your app won't show any values if it's not connected to a database. For setting up the database you want to follow the instructions in the database setup section below. Don't forget to configure the roles or else everyone will have access to everything.

After you set up the database, go to "Hosting" in your Firebase-App and click on "Get started". Follow the steps mentioned there to deploy your app to Firebase. If it doesn't show you anything, you need to do the following:
Open a terminal and navigate to your app. Use 
```sh
$ npm run deploy
```
Your app should be deployed now.
If you run into trouble, check the firebase website for help.

Congratulations, you successfully installed your app!


## Database Setup

In this section we will quickly go through how you can setup your database, the database rules and also how you can write data into your database! As mentioned earlier, the app won't show values if there's no database or if the values are not stored correctly. Again, follow the steps carefully in order to set things up right and make everything work.

### Database Rules

In the Database section of your Firebase-App, click on the Rules tab. It is not adviced to change the rules since security problems might occur otherwise. The rules can be copy+pasted from the [_db_rules.md](./doc/_db_rules.md) file.


### Database Structure

For the database structure, it is also important that it looks like the description in the [_db_struc.md](./doc/_db_struc.md) file because otherwise your application won't show any values and other data.


### Writing data to your database

TODO


## Using the API

This section will cover how you can use the API to download data from the e.ray database. This data can be used to compute weather forecasts, to anticipate floods or similar things.

TODO



### [Structure](./doc/_structure.md)


