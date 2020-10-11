## Google App Example 01
This apps is created using Koa + EJS.

Description:
- Fetch data from jsonplaceholder.typicode.com (endpoint `/users`)
- Render the fetched data using ejs
- Style the table using MaterializeCSS

Disclaimer:
- This build is made without using Cloud Build.

How to deploy on Google App Engine (GAE):
1. create the apps first (obviously...)
2. create the package.json run start script (see `package.json` for more details)
3. create the `app.yaml` for deployment configuration on GAE (see `app.yaml` for more details)
4. deploy the apps (make sure your terminal already have gcloud sdk installed / using cloudshell)
   by using `gcloud app deploy`
5. wait for the apps to deploy...
6. when the deployment is ready, see the result with `gcloud app browse`