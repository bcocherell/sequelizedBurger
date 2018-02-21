# eat-da-burger

Created for a coding bootcamp assignment, it's a simple app that let's you create burgers and 'devour' them while persisting all data in a MySQL database. 

## Before You Begin

If running locally...

- Run `npm install` as the app makes use of several npm packages.

- Run the `db\schema.sql` and `db\seeds.sql` files to setup the `burgers_db` schema and necessary tables in your mysql environment. 

- Edit the `config\connection.js` file to point to wherever your MySQL server is, and use credentials that have read/write privileges to the new `burgers_db` schema

- Run `node server.js` and open a browser to `localhost:3000`

## Instructions

- Whenever a user submits a burger's name (using the form at the bottom of the page,) the app will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a 'Devour it!' button. When you click one, the burger will move to the right side of the page.
- The app will store every burger in a database, whether devoured or not.

![Sample Output](public/assets/img/screenshot.png?raw=true "Sample output")