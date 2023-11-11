I have used Local Storage for storing User account information.
I have used react-router-dom and Material UI libraries


Landing Page Description -- App.js :

Imports: I have Imported the necessary things from React, React Router, and Material-UI (styling library).

Page Structure: The landing page is organized with a welcome message and buttons for signing in and signing up.

Routing: I have set routing for signing in or signing up two different components.


Signin Page Description -- Signin.js :

Imports: I have Imported the necessary things from React, React Router, and Material-UI (styling library).

Page Structure: The Signin is organized with a email, password fields and signin button after successful validation.

Routing: I have set routing for signing in page by Navigte hook.


Signup Page Description -- Signup.js :

Imports: I have Imported the necessary things from React, and Material-UI (styling library).

Page Structure: The Signup is organized with a username, phonenumber, email, password fields and signup button after successful validation the account will be created.

Alert: After the creation of account an alert will be shown and user can signin by going back to navigate page.


Dashboard Page Description -- Dashboard.js :

Imports: I have Imported the necessary things from React, React Router and Material-UI (styling library).

Page Structure: The Dashboard is organized with a Topbar and welcome message with username and a logout button.

Routing: After the logout of account the user will be navigated to the Signin page again by Navigate Hook.


AlertDialog Page Description -- AlertDialog.js :

Imports: I have Imported the necessary things from React, and Material-UI (styling library).

Page Structure: The AlertDialog will be shown whereever it was used for validation.