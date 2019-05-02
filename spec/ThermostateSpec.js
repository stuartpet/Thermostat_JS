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

  // it('Powersave mode is max 25 degres', function() {
  //   for (var i = 0; i > 26; i++) {
  //     thermostat.up();
  //   }
  //   expect(thermostat.getCurrentTemprature()).toEqual(25);

  // });
});
