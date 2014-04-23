// Editing anything in this file is cheating! :)
// Getting these tests to pass should go from easier to harder as you move
// down the file.

require('should');

describe("CommonJS modules in Node.js", function () {

  describe("exported properties", function () {

    it("knows some city nicknames", function () {
      var places = require('../lib/nicknames');
      places.chicago.nickname.should.eql('windy city');
      places.boston.nickname.should.eql('beantown');
      places.denver.nickname.should.eql('mile high city');
    });
  });

  describe("module id", function () {

    it("should *not* raise an exception", function () {
      require('../lib/blues_brothers').areGoingTo.should.eql('Chicago');
    });
  });

  describe("package module id", function () {

    it("should *not* raise an exception", function () {
      require('../lib/elevations').denver.should.eql(5280);
    });
  });

  describe("synchronous loading and evaluation", function (done) {

    it("can't set exports asynchronously", function () {
      require('../lib/distances').fromNewYork2Chicago.should.eql(807);
    });
  });

  describe("module closures", function () {

    it("should keep secrets", function () {
      require('../lib/lost_cities');
      (typeof TROY).should.eql('undefined');
      (typeof MACHU_PICCHU).should.eql('undefined');
      (typeof POMPEII).should.eql('undefined');
    });
  });

  describe("circular dependencies", function () {

    it("should compute the name of our town", function () {
      require('../lib/our_town').say().should.eql('Saratoga Springs NY');
    });
  });
});
