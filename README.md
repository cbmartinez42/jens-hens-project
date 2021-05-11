<<<<<<< HEAD
# jens-hens-project

Jays working branch testing
=======
# Jen's Hens   

[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
Jen’s Hen’s
```
As an admin I can maintain product inventory by incrementing or decrementing the current total on hand.
As an admin I can see a list of orders sorted by fulfilled or not and then by order date.
As an admin I can indicate that an order was fulfilled and the system will timestamp the order with the current time/date.
As an admin I can allocate eggs to existing users or generic user. Will increment “allocated”.
As an admin if allocating to a generic user must ask for name.
As an admin I can see a list of users and if they have requested admin access.
As an admin I can approve a request from a user to be an admin and then the user record will be updated with the correct role.
As a new user I can register as a user.
As a user I can see a list of my orders and if they are fulfilled or not.
As a user I can log in and see current product availability (total minus allocated) and request up to max_request.
N2H: As as admin I am able tp add/maintain additional Products in a product file.
N2H: Take payment from site such as PayPal or Square
N2H: As an Admin can send an email or text to all or individual users with product availability.
N2H: As an Admin can send individual email or text when new egg allocation is made
N2H: Log of transactions for on hand balance
N2H: Repeat last order
N2H: Pricing for product(s)
N2H: $ Sponser a Chicken
N2H: Chicken Match / Swipe right
```

### Features
* Utilizes Node.js with the Sequelize module to allow for functionality 
    * Sequelize uses model associations to manage relationships between models
    * Route management functionality assisted by Sequelize as well



## Installation Instructions
To install this application, please follow the below instructions:  
1.  Clone or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  Copy the content from `schema.sql` and paste into your favorite SQL GUI or MySQL CLI shell to create the database
4.  Update the information in `.env.EXAMPLE` with your username and password and rename the file as `.env`
5.  Type `npm run seed` in your terminal to seed the database
6.  When ready, type `npm start` in your terminal to launch `server.js`
7.  Navigate to `localhost:3001` or, if a different port is specified in your `.env` file, use that port

## Usage
Use this to have a personalized blog site with functionality for contributors

## License 
This project is licensed under the MIT License. Click the link below to learn more about how you can use this project.  
License: [MIT License](https://opensource.org/licenses/MIT)

## Contributors
Many thanks to those that contributed to this project:
* Mim Armand
* Stephen Simone
* Jay Yousef
* And last, but not least - *Grogu*  
![Image of Grogu](./assets/images/grogu.png)

## Questions
### Questions or issues?  
Questions or issues should be raised either by emailing the developer at the links below or creating an Issue within Github using the Issues button at the top of the repository
### To contact me:
* Github: [cbmartinez42](https://github.com/cbmartinez42)  
* Email: [cbmartinez42@gmail.com](mailto:cbmartinez42@gmail.com)

>>>>>>> main
