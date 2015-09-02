'use strict';

var greet = require('../greet');
var greetExports = require('../greet_exports');
var chai = require('chai');
var expect = chai.expect;

var expect2 = require('chai').expect;

console.log(greet); 

describe('greet', function() {
  it('should return hello specific name', function() {
    expect(greet('this name')).to.eql('hello this name');
  });
});

describe('greet exports', function() {
  it('should also greet when called', function() {
    expect(greetExports.greet()).to.eql('hello world from greet exports');
  });
});
