'use strict';

describe('Thermostat', function() {
  var thermostat;
  var temprature;
  beforeEach(function() {
    thermostat = new Thermostat()
  });
  it('Manages the temprature', function() {
    expect(thermostat.getCurrentTemprature()).toEqual(20)
  });

  it('turns up the temprature', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemprature()).toEqual(21)

  });
});
