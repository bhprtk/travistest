'use strict';

var expect = require('chai').expect();
var math = require('../../math');

describe('Math', function() {
  // suite
  describe('Math', function() {

    describe('add()', function() {
      //test (spec)
      it('should add two numbers', function() {
        expect(math.add(2, 2)).to.equal(4);
      });
    });

  });

});
