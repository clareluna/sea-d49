'use strict';

var greet = require(__dirname + '/../lib/greet');
var chai = require('chai').expect
var expect = chai.expect;

describe('greet', function() {
  it('should greet someone by name', function() {
    expect(greet('test')).to.eql('hello test');
  });

  it('should solve all the world\'s problems'); //pending test
});
