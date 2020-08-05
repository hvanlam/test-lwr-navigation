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



