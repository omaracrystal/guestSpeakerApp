# Steps to creating an app

https://github.com/gSchool/g11-course-curriculum/blob/master/week15/15_lectures/continuous-integration-and-delivery/README.md

###Set Up
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

###Heroku
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

###Folder Tests
* create folders and test files
* run tests > $ istanbul cover _mocha -- --recursive -R spec
* .gitignore
* package.json >
"scripts": test": "mocha --recursive",
"cov": "istanbul conver _mocha -- --recursive -R spec"
Without code coverage:
$ npm test <this now works shorter syntax>
With code coverage:
$ npm run cov
* coveralls.io > get a badge for showing code coverage > add repo to site and turn on repo

###Travis
* add to .yml > change script to - npm run coveralls
* add to package.json >
"send-coverage": 'npm run cov -- --report'



Terms
* MIT license
* nvm - node version manager
* regressions - when you right code and it breaks (keep master clean)
* istanbul.js (All-javascript instrumentation library that tracks statement, branch, and function coverage and reverse-engineers line coverage with 100% fidelity.)
* when testing $ istanbul cover _mocha -- --recursive -R spec
* coveralls.io > get a badge for showing code coverage > add repo to site

