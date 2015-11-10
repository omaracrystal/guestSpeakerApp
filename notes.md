# Steps to creating an app

https://github.com/gSchool/g11-course-curriculum/blob/master/week15/15_lectures/continuous-integration-and-delivery/README.md

* yo galvanize-express
* npm install
* git init
* create repository
* commit push
* tests (unit test, intigration test, functional test) - create folder 'test' - create file test-routes.js (mocha is runner- test discover, and chai is the 'should')
* npm install chai --save
* npm install mocha --save
* npm install chai-http --save
* travis-ci.org (create file .travis.yml - turn on repository, - important things to distinguish: what version of node, install packages, run tests, deploy) - how do you know what node version you are running? ($ node -v) - when commiting and pushing up, travis should catch what doesn't pass the tests you have build.

Heroku
* install heroku toolbelt if it is not already on your computer
* $ heroku create <new name>
* side note - if you do not specify what node version you are using when pushing up to heroku it will choose for you.
* $ git add .
* $ git commit -m"added heroku site"
* $ git push (see readme.md)
* once pushed your .travis.yml the api_key will update etc.


* now sync heroku and travis.ci
* $travis setup heroku
* ^^ install if needed ^^

Terms
* MIT license
* nvm - node version manager
* regressions - when you right code and it breaks (keep master clean)


