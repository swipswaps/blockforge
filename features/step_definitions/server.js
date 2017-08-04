/*eslint no-unused-vars: [0]*/

// Dependencies
// ------------
const chai     = require(`chai`);
const should   = chai.should();
const expect   = chai.expect;
const {defineSupportCode: cucumber} = require(`cucumber`);

// Request Actions
// ---------------
cucumber(({Given, When, Then}) => {
  Then(/^the server should run$/, function(done){
    this.serverData.should.be.an.object;
    this.serverData.options.should.be.an.object;
    this.server(this.serverData.options)
      .then((app) => {
        done();      
      })
      .catch((error) => {
        console.log(`Oops, the test server couldn't start!`.red);
        console.error(error);
      });
  });
});