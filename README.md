# Deploying a React app on Github-page

## prerequisite

Have a React app, NodeJs, npm and a github repository

## Then

Install new dependency in your package-json

`npm install gh-pages`

add the link of the future deployement in your package-json like this :

`http://<github-username>.github.io/<repository-name>`<br/>
(i.e: `"homepage": "http://bsao17.github.io/example-react-app",`)
  
Add new scripts in your package-json
  
`predeploy": "npm run build` <br/>
`deploy": "gh-pages -d build`
  
push all commits, and run deploy script,
  
`npm run deploy`

## It's deployed ...
  
## For more informations, here the path with complete instructions:
https://medium.com/swlh/create-deploy-host-react-app-for-free-github-pages-c1f41bed6497
  
