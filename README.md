# Jens Hens eCommerce Store
[![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Description
This ecommerce site for pickup gives a lot of power to admin users and is a very simple to use to and navigate for new users. The UI is clean and allows them to ability to follow a few easy steps to order a single product with a fixed price and schedule a time for pickup.

[![Link to Deployed Application](./assets/jenshenshomepage.png)](https://secure-ravine-09245.herokuapp.com/)

### User Story
As an admin I can approve other users request's to be admin users, I can see a list of all the users who currently exist, I can see the list of all the current orders and I can fulfill those orders when my products are ready to be delivered/picked up. Future implementation will be able to manage product inventory by incrementing or decrementing the current total on hand.


# Jen’s Hen’s

```
As an admin I can see a list of orders sorted by fulfilled or not and then by order date.
As an admin I can indicate that an order was fulfilled and the system will timestamp the order with the current time/date.
As an admin I can allocate eggs to existing users or generic user. Will increment “allocated”.
As an admin I can see a list of users and if they have requested admin access.
As an admin I can approve a request from a user to be an admin and then the user record will be updated with the correct role.

As a new user I can register as a user.
As a user I can see a list of my orders and if they are fulfilled or not.
As a user I can log in and see current product availability (total minus allocated) and request up to max_request.
As a user I can make a payment through paypal payment services

*Future Implementations*

As as admin I am able tp add/maintain additional Products in a product file.
As an Admin can send an email or text to all or individual users with product availability.
As an Admin can send individual email or text when new egg allocation is made
As a user I can repeat my last order so that I can order more quickly
As an admin I can Pricing for different product(s) or create sales
As a user I can select a chicken and decide to sponser a Chicken with a one time donation or monthly payment
As a user, I can also swipe through the chicken images and pick the chicken I want to sponsor
=======
```

### Features
* Utilizes Node.js with the Sequelize module to allow for functionality 
    * Sequelize uses model associations to manage relationships between models
    * Route management functionality assisted by Sequelize as well
    * HTML, CSS & JavaScript
    * Handlebars Template Engine
    * Materialize Framework
    * MySql database
    * Creative Google-fu
    * Express JS/Express Session
    * Paypal Payment Structure
    * Instagram API Gallery




## Installation Instructions
To install this application, please follow the below instructions:  
1.  Clone or download .zip file from Github to your local computer
2.  In Git Bash or Terminal, type `npm install` to install the necessary modules
3.  Copy the content from `schema.sql` and paste into your favorite SQL GUI or MySQL CLI shell to create the database
4.  Update the information in `.env.EXAMPLE` with your username and password and rename the file as `.env`
5.  Type `npm run seed` in your terminal to seed the database
6.  When ready, type `npm start` in your terminal to launch `server.js`
7.  Navigate to `localhost:3001` or, if a different port is specified in your `.env` file, use that port
8. You can then see changes to your website in real time and update functionality and change images/styling to your desires.

## Usage
This gives a very professional looking template website for any ecomm site, especially one with pickup, since shipping it not handled yet. It allows you to have users, approve admin users to help with fulfilling orders. 

Users can checkout and create new orders and pay with paypal and then the order is saved to the database.

## License 
This project is licensed under the MIT License. Click the link below to learn more about how you can use this project.  
License: [MIT License](https://opensource.org/licenses/MIT)

## Contributors
Many thanks to those that contributed to this project:
* Mim Armand
* Kat Poulos
* Mark Artim
* Jay Yousef
* And last, but not least - *Grogu*  
![Image of Grogu](https://upload.wikimedia.org/wikipedia/en/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg)

## Questions
### Questions or issues?  
Questions or issues should be raised either by emailing the developer at the links below or creating an Issue within Github using the Issues button at the top of the repository

You can also fork the repository, make some changes yourself and then create a pull request, make sure to comment why the PR is necessary and describe what changes you've made or it will be rejected.

### To contact me:
* Github: [cbmartinez42](https://github.com/cbmartinez42)  
* Email: [cbmartinez42@gmail.com](mailto:cbmartinez42@gmail.com)
* Github: [Mark Artim](https://github.com/mark-artim)  
* Email: [mark.artim@gmail.com](mailto:Mark.Artim@gmail.com)
* Github: [Jay Yousef](https://github.com/jayyousef)  
* Email: [jay.yousef@gmail.com](mailto:jay.yousef@gmail.com)
