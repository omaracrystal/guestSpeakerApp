var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server/app');

var should = chai.should();

chai.use(chaiHttp);

describe('server router', function () {
  it('should return...', function(done) {
    chai.request(server)
    .get('/')
      .end(function(err, res) {
        res.should.be(200);
        // res.should.have.text('<p>Welcomoe to Express</p>');
        done();
      });
  });
});
