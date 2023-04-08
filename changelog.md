CL-1.14: Fixing bugs and improvements
- Added error middleware and used its class to define custom message and statuscode across id routes.
- added default export for errorhandler class in errormiddleware file.
- Added errorHandling for User and task Routes as well.
- Added NODE_ENV variable to ensure we get sameSite and lax options of cookies in dev mode only for same site..
  - Basically sameSite:lax(it is default) means we can call via localhost://5000/ and get cookies in its application tab in chrome.
  - Suppose we keep sameSite:none means cookie won't be generated in same URL but secure:true must be enabled to ensure the cookies data is secure in different website URLS.
- Modified the logout,sendMyCookie logic to support the above change.

CL-1.13: Fixing bugs and improvements
- created new routes for tasks.
- created route chaining for put,delete,get for id.
- created errormiddleware to handle unknown methods acccess.

CL-1.12: Fixing bugs and improvements
- Updated description in Readme file.
- Moved nodemon to devdependencies.
- Found out the hard way that the async and await smaller feature functions were not working for some promise unresolved reason.
- So moved them out in to the code directly in user.js controller file.
- WOrking goood now are: /, /register, /login, /logout, /me.
- Modified logout to work better now.

CL-1.11: Deploying node server.
- Imported cors middleware.
- Added cors to enable http requests without errors.

CL-1.10: Deploying node server.
- updated api path to api/v1 for all routes
- installed and used cookie parser.
- Updated user and task routes.
- Updated user and task models.
- Updated controllers and utils.

CL-1.09: Deploying node server.
- Trying to deploy the server in render
- Trying to fix the server errors in render

CL-1.08: Improving login, registering api's
- Added Utilities file which will have all the required small utility functions.
- Added usage of  bcrypt hashing and jwt cookies.

CL-1.07: Creating Task api.
- Updated User, Task schemas.

CL-1.06: Creating Task api.
- Added Task MVC with 3 routes(endpoints).
- Tested aswell.

CL-1.05: Adding and testing api's.
- Added login logic.
- Added login controller.
- Added login route.
- Added register logic.
- Added getallusers logic.


CL-1.04: Code splitting.
- Split the code into MVCD (Model-View-Controller-Database) structure
- Added mongoose models folder.
- Added Routes folder for users.
- Added controllers for logic separation.
- Added User schema and model.

CL-1.03: MongoDB Atlas setup.
- Added mongodb atlas connection.
- Added DB URI strings in .env file.
- Updated package.json scripts.

CL-1.02: Project structure setup.
- Added MVC(Model(Routes),View(Routes),Controller(Controllers)) structure for the project.
- Improved the server listener log using dynamic port.
- Added config.env file.
- Updated gitignore file.

CL-1.01:Initial commit.
- Initialized npm.
- installed all required backend dependencies.
- added package scripts.
- Added basic server template in server.js.