# Apartments for Rent

By Joe Fiume  
[jfiume.github.io](http://https://github.com/jfiume)

## Instructions

1. run git clone "https://github.com/jfiume/Apartments.git"
2. Install Gemfile dependencies with "bundle install"
3. Install font end dependencies with "npm install"
4. run "rails s" to start the rails server
5. run "ruby ./bin/webpack-dev-server" to start the built in rails webpack
6. Enjoy!

## Discussion
* I used the following technologies: Rails, Sqlite3, React and Redux.
* robots file can be found here: [robots](https://github.com/jfiume/Apartments/blob/master/public/robots.txt)
* sitemap can be found here: [sitemap](https://github.com/jfiume/Apartments/blob/master/public/sitemap.xml)
* Link Flow Diagram can be found here: [link flow diagram](https://github.com/jfiume/Apartments/blob/master/public/Link%20Flow%20Apartments.png)

## Requirements
#### Build the Apartments for Rent App
The application should:
* Be backed by a sqlite3 database, see: https://guides.rubyonrails.org/getting_started.html
* Use a front-end framework like React or Angular. Rails 5.1 comes with the Webpacker
gem installed, please use this to manage the JavaScript framework
(https://github.com/rails/webpacker)
* Store "Apartment" objects with the following attributes: address, city, state, bedroom
count, and bathroom count. You should do this by using the ‘rails generate scaffold’
command
* The ability for users to create, view, and edit apartments
* Have a search index page displaying the existing apartments along with the ability to
filter the apartment based on bedroom and bathroom counts
* Serve a robots file
* Serve a sitemap file
* create a diagram that shows the link flow of your application
