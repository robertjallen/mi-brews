
## Table of Contents
- [Adding API Keys](#adding-api-keys)
- [Folder Structure](#folder-structure)
- [Launching the app](#launching-the-app)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run deploy](#npm-run-deploy)
  - [npm run eject](#npm-run-eject)

## Adding API Keys

The app uses react-google-maps and foursquare apis.
Easy set-up:
- create a .env file in the root directory.
- Use the following names in the .env for your keys. 
- REACT_APP_ID=your_4_square_id
- REACT_APP_SECRET=your_4_square_secret
- REACT_APP_MAP_KEY=your_g_map_key
- The create-react-app tool uses REACT_APP_ to identify these variables. If you don't start your API key name with it, create-react-app won't see it.


## Folder Structure

After creation, your project should look like this:

```
neighborhood-brew-map/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    api/
      index.js
    component/
      Hero.js
      ListItem.js
      Map.js
      SideBar.js
      VenueList.js  
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## Launching the app

In the project directory, you can run:

### `npm install`

Runs the installation using the development dependencies from package.json.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run deploy`

Before running this command you should edit the package.json to include your github username in the homepage object. "homepage": "https://YOUR_USER_NAME_HERE.github.io/mi-brews".
Only run this command from the master branch.
Deploy will first build a production build in the master branch. Then it will create and push the build to gh-pages branch. You should then have a deployed version being served from gh-pages. If there are problems verify you have an updated gh-pages node module in the node_modules.  

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
