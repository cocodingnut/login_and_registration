# LoginAndRegistration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Current behavior:

1. Login: A click on the Login Button throws an error "the user does not exist."

2. Registration: A click on the Register link in the top right corner of the Login page launches the Registration page. But no action is performed when the Register button is clicked.

## Expected behavior:

1. When the Login button is clicked on the Login page, the user should experience the following based on the correct user credentials entered on the login page.

    a. If correct, the user should be taken to the "Home page."

    b. If incorrect, then it should throw an error message "the user does not exist."


2. On the Registration page, when the Register button is clicked, all fields should be appropriately validated, as explained below. The user should be redirected to the "Login Page" only if it passes all the validations.

    a. The email should be in a valid format.

    b. Password and Repeat Password should match.

    c. No fields should be empty.