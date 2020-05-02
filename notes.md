Exploring the files
1. Where the Web Server starts?
    - The start command in the pckg json file tells the system to use the www file in the bin folder
    - On startup, the www file accesses the main app.js file
    - then sets the port to 3000, although the generator uses the normalizePort function which just makes sure the port is a number
2. App level configurations:
    (? I'm assuming that the App level configurations are anything in the app.js file)
    > The View Engine
    - this is set on line 14 in app.js and uses 'jade' 

    > JSON Parsing
    - this is used on line 17 and I have no idea what it does
    - *** Required to make express work ***

    > Routes
    - the routes are accessed from different files on lines 7 & 8
    - Then the generator points to the 2 routes on lines 22 & 23

    > Error Handling
    - An error handler is set up on line 26 - 39
    (? I don't really understand what it is doing. There is no name so how is it getting called, there's no conditions so why/when is it being run?)

    > Additional Middleware
    - Defining Middleware - 
        "An Express application is essentially a series of middleware function calls.
        Reference- https://expressjs.com/en/guide/using-middleware.html
    - app.use does a few things I don't understand 
        (logger('dev'))
        (urlencoded({extended:false}))
        (path.join(_dirname, 'public')) it's going to the static folder in public by why did they make it so involved
3. Route Handlers
    - the actual handlers are in the routes folder but passed into the app.js file which is then passed into the www.js file
    - routes are passed by importing the file using "require & ('/the path name')" then being called in the body of the app
4. View Engine Templates
    - I dont' see layout.jade template expressly called anywhere. But I think it is auto displayed, because it is the layout with the !Doctype in it and the other views are 'extended'?

Stretch
1. What type of resources can you host with Express
    I think you can host anything with Express but the most value comes in when connecting to a data source
2. What are the benefits of using a View Engine
    Being able to create view templates when needed or access static files
3. Why does the Express Generator split up the functionality into so many files
    I think it's to separate the concerns so that way when you need to debug or make changes you know exactly where to access the necessary components.




