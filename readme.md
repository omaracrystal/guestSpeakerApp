# Steps to creating an app

* yo galvanize-express
* npm install
* git init
* create repository
* commit push
* tests (unit test, intigration test, functional test) - create folder 'test' - create file test-routes.js (mocha is runner- test discover, and chai is the 'should')
* npm install chai --save
* npm install mocha --save
* npm install chai-http --save
* travis-ci.org (create file travis.yml - turn on repository, - important things to distinguish: what version of node, install packages, run tests, deploy) - how do you know what node version you are running? ($ node -v) - when commiting and pushing up, travis should catch what doesn't pass the tests you have build.


Terms
* MIT license
* nvm - node version manager
