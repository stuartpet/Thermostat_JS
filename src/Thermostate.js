'use strict';

function Thermostat() {
  this.temprature = 20;
  this.MINIMUM_TEMPRATURE = 10;
  this.PowerSavingMode = true;
}


Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}
Thermostat.prototype.isMinimumTemprature = function() {
  return this.temprature === this.MINIMUM_TEMPRATURE;
}

Thermostat.prototype.isPowerSavingMode = function () {
  return this.PowerSavingMode === true;
}

Thermostat.prototype.isPowerSavingModeOff = function () {
  return this.PowerSavingMode = false;
};

Thermostat.prototype.up = function() {
  // if (this.isPowersave()) {
  //   return;
  // }
  this.temprature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemprature()) {
    return;
  }
  this.temprature -= 1;
}
