Gotta Catch em All

# Gotta Catch em All (with JavaScript)
​
## Prompt
​
> Pokemon preschool needs an app to prep trainers before they head out into the real world
​
## Requirements
​
You are going to build an application using iterative development, starting with an MVP, and then adding functionality. In addition to your frequent commits, **make a commit after completing each of the following steps, indicating that you have just completed it.** It may not be the case that you have time to complete all of the following steps, but regardless, **you must work on them in order.**
​
## Workflow Requirements
​
- Record your screen when you are working on the app
- Use the frameworks of your choice
- Aim for MVP before making the app more complicated.  Your code should be clean and simple.
- Plan first, then work on the following parts of fullstack IN ORDER per feature.  Basically only work on one feature at a time.
  1. Database
  2. Server
  3. Client
​
Example:
  1. After setting up database and tables, create GET dbHelper.  Test that it works
  2. Set up serverside functionality to GET data with dbHelper.  Test that it works
  3. Build client to perform GET request. Test that it works.
  4. Once this feature works, you may revisit database and add additional functionality for POST
  5. repeat steps 1-4
​
## User should be able to:
### STEP 1 - Render one random pokemon image (original 151)
  - obtain the pokemon data from the Pokemon API
  - DO NOT store the 151 pokemon data in your database
​
### STEP 2 - Catch a pokemon and persist this information (image, name, number, type)
  - on clicking rendered pokemon, have a chance at catching the previously rendered pokemon
  - display message on the screen if it was/wasn't successful
​
### STEP 3 - Display caught pokemon collection (just the image) under the randomly rendered pokemon
  - Do not display any duplicates, instead, add a number indicating how many you have caught
  - Add some styling please
​
### STEP 4 - Refactor code to allow Login and persistance of user information.  Create a link between the user and pokemon caught so that upon successful login, only pokemon caught by that user is displayed
  - Do not display any duplicates, instead, add a number indicating how many you have caught
  - Don't create foreign keys
​
### STEP 5 - Upon clicking an image in caught pokemon collection, renders a modal showing the image, name, number, and type
  - modal should not completely block out th whole page.  I should still be able to see the background.
​
### Available Resources
​
Should you ever have a question about whether a given resource is allowed or not, please ask a proctor.
​
The use of generators or other similar resources are strictly prohibited.
​
- [MDN](https://developer.mozilla.org/)
- [Stack Overflow](http://stackoverflow.com/)
- [NodeJS docs](https://nodejs.org/en/docs/)
- [ExpressJS docs](https://expressjs.com/)
- [ReactJS docs](https://facebook.github.io/react/docs/getting-started.html)
- Official docs for database of your choice
- Official docs for ORM of your choice (should you choose to use one)
- Official docs for any other packages or libraries you use in your code (for example, bluebird, lodash, ui-router, webpack etc.)