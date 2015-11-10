# Continuous Integration and Deployment with GitHub, Travis and Heroku

What is Continuous Integration and Deployment? Why should you use it? Read [this](https://css-tricks.com/continuous-integration-continuous-deployment/).

> This tutorial assumes you signed up for [Travis CI](https://travis-ci.org/) and [Github](https://github.com).

## Steps

1. Create a new Node/Express app using the generator.
1. Add Mocha, Chai, and Chai-HTTP.
1. Add two tests:
  - The first should test that the main route, '/', returns a 200 response. This should pass.
  - The second should test that the main route, '/', returns a 404 response. This should fail.
1. Add a *.travis.yml* file to the project root:

  ```yaml
  language: node_js

  node_js:
    - "4.1"
    - "4.0"
    - '0.12'
    - '0.11'

  services: mongodb

  before_script:
    - npm install -g mocha

  script: mocha
  ```

  What do each of these do?

1. Push this code up to Github. Watch the tests fail on Travis CI.
1. Create a new branch. Push this up to Github. Open a PR. Watch the tests fail again on Travis CI. Can you merge the PR? Why not?
1. Remove the failing test. Push this up to Gitub again. Watch the tests pass. Merge the PR. What happens now? Check Travis CI for a hint.
1. Jump back to the Master branch. Pull down the changes from Github. Why did we have to do this?
1. Set up a Heroku app. Push up your project to Heroku.
1. Create another new branch.
1. To get an API key, install the Travis gem - `gem install travis` then run the following command:

  ```sh
  $ travis setup heroku
  ```

1. What does the *.yaml* file look like? It should look something like this:

  ```yaml
  deploy:
    provider: heroku
    api_key:
      secure: "ADD YOUR KEY NAME"
    app: "ADD YOUR HEROKU APP NAME"
    on:
      branch: master
      node: '0.12'
  ```

1. Make a change to the *index.html* view. (update the text in the H1, perhaps)
1. Push the changes to Github. Create a PR. Watch the tests pass. Merge the tests. Then after the tests pass on the Master branch the build should be deployed to Heroku. Refresh your Heroku app in chrome to see the changes.
1. Once done, diagram the main workflow out.

  ```
  - Create a new branch
  - Hack! Hack!
  - Git Commit, Push to GitHub
  - A build is triggered on Travis (against the feature branch)
    - If tests fail nothing happens
    - If tests pass merge branch
  - A build is triggered on Travis (against the Master)
    - If tests fail nothing happens
    - If tests pass the app is deployed
  ```

## Additional Resource

1. http://blogs.atlassian.com/2014/04/practical-continuous-deployment/
