# Garage Sale Frontend App

Garage sale front-end app with a backend based on serverless functions and a Google Sheets database.

Try a [live demo](https://garage-sale-fukuoka.vercel.app)!

## Getting Started

### Prerequisites

This app uses a `Google Sheet spreadsheet` as database for the items listed in the frontend. You can find a template of the necessary spreadsheet data structure [here](https://docs.google.com/spreadsheets/d/10PrpE4CrigEPi6KCo87XQ-TkUXZP7KYYsJ-Ff3CeBf0/edit?usp=sharing).

- The app was originally designed to be used in Japan, using JPY and supporting both Japanese and English languages. In case of having different needs you may need to tweak the database columns, database response parsing method, i18n and price amount UI display.

- The above template was setup public for documentation purposes. Make sure you setup your spreadsheet as private to avoid exposing any data.

After you create a spreadsheet you will need to `authenticate the Google Api` to your project using `Default Credentials`.

- You will need a Google Clout Platform account to do this.

- To learn how to enable API services in your GCP account for this proyect, you can check this [tutorial](https://www.youtube.com/watch?v=K6Vcfm7TA5U&t=294s).

- Due to some Vercel Hobby account limitations, different to the above tutorial, we didn't use a `secrets.json` file for the authentication credentials. Instead we used the decryption method explained in this [article](https://leerob.io/blog/vercel-env-variables-size-limit).

You can see which are the environment variables that this app uses checking the file `/.env.local(sample)`.

### Installation

1. Install NPM packages

```sh
npm install
```

2. Run the app in the development mode

```sh
npm run dev
```

## About The Project

This app allows you to share a catalog of items you would like to sell or give away for a garage sale or similar event.

Users can then filter the items in the list by availability, category or price.

It is also possible to display an closable info message on the top of the page to give some context about the sale or to explain how the site is used.

![Main Page](images/01.jpg?raw=true "Main Page")

When users see one or more items they are interested in, they can directly select the item(s) and click the top bar Book button to open the booking form.

![Selecting items](images/02.jpg?raw=true "Selecting items")

To make the booking process as casual and painless as possible for the user, only the name, contact info and optional comments are requested in the form. This form could be enhanced depending on the needs.

![Booking Form](images/03.jpg?raw=true "Booking Form")

Once the user confirms the booking of the items, the selected item(s) are automatically mark as RESERVED in the spreadsheet and the item row is filled with the booker information.

Not a specially fancy logic, but this simple app allowed us to sell all our stuff smoothly in just a matter of days.

The UI has a responsive design so it can be displayed in smartphones and other devices too.

![Booking Form](images/04.jpg?raw=true "Booking Form")

## Deployment

The app was designed so it can be deployed on a Vercel Hobby account using continous integration and serverless functions to integrate with the Google Sheets spreadsheet.

Once you setup Vercel and integrate it with your Github account, deploying the app is as simple as pushing your code to one of your branches.

Finally, you must also register the same environment variables contained in your `/.env.local` file in the admin page of your Vercel project.
