# Sample LWR Navigation

This sample is an exercise to get familiar with declaratively and programmatically navigation provided in LWR.  

### See it in action:
1. git clone git@github.com:hvanlam/test-lwr-navigation.git
2. npm install
3. npm start
4. Go to http://localhost:3005

### Components:
1. **mainrouter**: Declare routers for **login** and **forgot** components.  See main.json file for route definitions.
2. **main**: A component with 2 &lt;webruntime-link&gt; to go to **login** and **forgot** components.
3. **loginrouter**: Declare routers to go to either success or failure. See login.json for route definitions.
4. **login**: A component to match user input with a list of LNS members and programmatically navigate to either success or failure components.
4. **loginsuccess**, **loginfailure**: Simple components to display a message based on login result.
5. **forgot**, **forgotresult**: Also is used to illustrate declaratively and programmatically navigation.

### Lessons Learned:
* For specifying route definition:
  * **path** attribute must start with '/', AND do not use numeric character in the path.  Otherwise on server start will get a LWR4015: Route data validation failed.
  * Similarly the route definition ID cannot contain numeric character, otherwise you will see the following validation error:
    > 1. Error: LWR4015: Route data validation failed: Route with id "none" from .json must have a valid "id" property
  * Same thing, do NOT use numerica character in route definition file name, for example: app2.json and &lt;webruntimerouter-app2&gt;.  You will get errors like:
    > LWR2000: Error during compilation: Could not load webruntimeRoutes/main2.js (imported by webruntimerouter/main2.js): LWR4012: Cannot find route set with id "main2"
  * Modification of route definition requires a server restart.   
  * When specifying the **component** for the "/" path, make sure it is not the same component that declares this route definition.  Otherwise, you will run into  infinitely loop.
* When specifying the path in &lt;webruntime-link&gt; the '/' can be omitted and the navigation still seems to work; however, the navigation is done twice, ie: the URL looks like:  http://localhost:3005/login/loginsuccess/login/loginsuccess.
* When specifying a path either with navigate() or &lt;a href&gt; that does not match with any route definition, you will get a not so helpful message but 404 is the key:
   > 404: Cannot find a view for route with id "undefined"
* When the LWC contains a syntax or compile errors, the server will start but navigating to that component will result in:
   > VM22 app:8976 Error loading page contents: "LWR4016: Expected a route view component with a default export."


