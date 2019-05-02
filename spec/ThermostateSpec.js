'use strict';

describe('Thermostat', function() {
  var thermostat;
  var temprature;
  beforeEach(function() {
    thermostat = new Thermostat()
  });
  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemprature()).toEqual(20)
  });

  it('turns the temprature up', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemprature()).toEqual(21)
  });
  it('turns the temprature down', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemprature()).toEqual(19)
  });
  it('has a minimum temprature of 10 degress', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemprature()).toEqual(10);
  });

  it('has power saving mode by default', function() {
    expect(thermostat.isPowerSavingMode()).toBe(true)
  });

  it('Can turn off powersave mode', function() {
    thermostat.isPowerSavingModeOff();
    expect(thermostat.isPowerSavingMode()).toBe(false)
  });

  it('Can turn powersave mode on', function() {
    thermostat.isPowerSavingModeOn();
    expect(thermostat.isPowerSavingMode()).toBe(true)
  });

  describe('when power saving mode is on', function() {
  it('has a maximum temperature of 25 degrees', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemprature()).toEqual(25);
  });
  });

  describe('when power saving mode is off', function() {
  it('has a maximum temperature of 32 degrees', function() {
    thermostat.isPowerSavingModeOff();
    for (var i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentTemprature()).toEqual(32);
  });
});

describe("Resets the thermostat", function() {
  it('sets the temrature to 20 degrees', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemprature()).toEqual(20)

  });
});
});
