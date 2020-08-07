const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../app');
const should = chai.should();
const expect = chai.expect;

describe('Homepage', function() {
  it('should return the application title', done => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.text).to.contain('Training Feedback Dashboard');
        done();
      });
  });
});
