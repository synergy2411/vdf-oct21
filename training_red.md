# Git repo link : https://github.com/synergy2411/vdf-oct21
------------------------------------------------------------

# What is JAVASCRIPT ? 
- Scripting Language
- Dynamic
- Client-side validation
- Defines behaviour on client-side as well server -side
    : HTML - presenting Data
    : CSS - for appearance and layout
    : JAvaScript - Behaviour part
- Web-pages interactive
- Can make XMLHTTPRequest/AJAX Call - fetch() : Promise API
- Single-threaded -> XHR -> 2S -> response
    : C++ Thread-pool using libuv
    : Horizontal Scaling
    : Vertical scaling
    : Microservices
- Light-weight
- Interpreted
- Object-based (Vanilla JavaScript) 
- Object-oriented (ES6 / ES2015) - Classes, extends, implement, 
- Can write own logic
- All browsers know it
- Can be used for front-end and back-end both
- Specifications given by ECMA
- Asynchronous / Non-blocking - (Timers, XHR, Reading, writing, Obtaining some Socket connection etc)
- Callbacks, Promises, Async...await


Full Stack - MEAN | MERN - JavaScript
- MongoDB Express Angular Node
- MongoDB Express React Node

# Async JavaScript Behaviour
- Sync Code
- Async Code
    - MicroTask : Promise, queueMicroTask()
    - MacroTask : Timers, XHR Call, Reading, writing etc


# 2 short breaks, 1 lunch break
- 12:00 - 12:20
- 1:30 - 2:15
- 4:00 - 4:20


- jQuery - DOM Manipulation, AJAX, Animation etc
    $("#").val("")


- JavaScript - document.getElementById("").value = "Some Value"


# JavaScript is Object based
# Object hierarchy
Object (hasOwnProperty, isValueOf, isPrototypeOf, constructor etc)
    - String (indexOf, length, charAt etc)
        : str = "Sample String"
    - Number (isNan, toFixed)
    - Date (setYear, getYear, etc)
    - Array (pop, push, every, forEach map etc)
    - Function (call, apply bind)
    - Person (firstName, lastName , getFullName)
        personaA.lastName, personA.firstName, personaA.getFullName

# Application
- Standalone App
- Web Apps
- REST API
- Microservices
- Advt Server
- File upload-download 


# Notes App
> node index.js add --title="New Title" --body="New Title Body"
> node index.js read --title="Some Title"
> node index.js remove --title="Some Title"
> node index.js list

# to generate package.json
    - npm init

# Various NPM Commands
- npm install nodemon [-g]
- npm config set/get
- npm config get registry
- npm config set author="sumit K"
- npm install chalk@2.4.1
- npm ls --depth 0
- npm outdated
- npm update
- npm adduser
- npm publish
- npm init 
- npm search <search-term>




# Semantic Versioning
X.Y.Z -> Major.Minor.Patch

- Patch : update on bug fixes (1.0.0 -> 1.0.1)
- Major : new features NOT compatible with existing codebase (1.0.0 -> 2.0.0)
- Minor : new features added with backward compatibility (1.0.0 -> 1.1.0)

^ - Patch Version
~ - Minor Version

Chalk - [
    4.2.1
    3.4.0
    2.6.7 -
    2.5.0
    2.4.7 -
    2.4.2
    ~2.4.1
    1.8.5
]


# to install express - npm install express



npm install nodemon -g

nodemon index.js




- npm init -y
- npm install express axios
- "dev" : "nodemon index.js"
- npm run dev






















# MAPBOX API
https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ

# DARKSKY API
https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233



vdiuser
sd5VFZXeVsXFHKQs

mongodb+srv://vdiuser:sd5VFZXeVsXFHKQs@cluster0.e9xsq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

- npm install express mongoose

# REST API
/GET - fetch all Items
/POST - Create new Item
/GET/{id} - fetching single Item
/DELETE/{id} - Deleting single element
/PATCH/{id} - Updating the single Item


# JWT Token / API Authentication
- npm install jsonwebtoken express

- /api/login [POST] - username & password -> Authenticated USER
- /api/protected [GET] - can be accesed by Authenticated USER 


# View Engine
- Dynamic template
- Reusability of template



# API Testing
- Postman Tool 
- Mocha : Testing Framework : npm install mocha -g
- Chai : Assertion Library

- npm i cors

# Heroku Cloud
- Make app deployment ready
    : package.json - "start" : "node src/index.js"
    : PORT = process.env.PORT || 9001
    : CORS installed
- Download and installed Heroku CLI
- heroku login
- heroku keys : add
    > Powershell - ssh-keygen
- heroku create <unique-project-name> vdi-expenses
- Committed all code to GIT 
- Committed all code to heroku
    > git push heroku main

# Deployed URL - https://vdi-expenses-app.herokuapp.com/expenses


# What is React?
- Cient-side JavaScript Library
- For building UI (Fast and Efficient)
- Single Page Application (react-router)
- Sponsured by Facebook Team
- Virtual DOM : Pure JavaScript representation of REAL DOM, in-memory
- Component Based Architecture : reusable piece of code, creates the UI
- Props : Parent-Child Component Communication
- State : Create the component dynamic
- Hooks : introduced in v16.8, useState, useEffect, useReducer, useContext, useParams etc
- CLI Tool - create-react-app
- npx create-react-app my-expenses
- npm install bootstrap@4

- Controlled : react manages the state
- Uncontrolled : browser manages the state

- useEffect() : run side-effect code
: useEffect(callbackFn) - re-render always whenever the state changes
: useEffect(callbackFn, []) - render only once at the time of component loading
: useEffect(callbackFn, [deps]) - re-render every time whenever mentioned dependencies changed










- React - building the UI
- side-effects - making XHR call, timers, setting the state etc etc








- SPA vs MPA
    : Make UI interactive - SPA
    : reloading the complete page - MPA
    : Consuming Network bandwidth - MPA

HTML, CSS, JS -> DOM -> Browser

JSX -> JavaScript -> Virtual DOM -> Real DOM -> Displayed to User

JSX -> HTML-ish type language

# Atomic Web Design
- Atoms : smallest unit, one button, one input field, 
- Molecules : Combo of Atoms -> one button + one input field -> Searchbar
- Organism : Combo of Molecules -> header -> Links + Searchbar
- Templates : Combo of Organism -> complete form
- Pages : combo of various templates