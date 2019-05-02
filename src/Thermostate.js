'use strict';

function Thermostat() {
  this.DEFAULT_TEMPRATURE = 20;
  this.temprature = 20;
  this.MINIMUM_TEMPRATURE = 10;
  this.PowerSavingMode = true;
  this.MAXIMUM_TEMPRATURE_PSM_OFF = 32;
  this.MAXIMUM_TEMPRATURE_PSM_ON = 25;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}


Thermostat.prototype.getCurrentTemprature = function() {
  return this.temprature;
}
Thermostat.prototype.isMinimumTemprature = function() {
  return this.temprature === this.MINIMUM_TEMPRATURE;
}

Thermostat.prototype.isMaximumTemprature = function() {
  if (this.isPowerSavingMode() === false) {
    return this.temprature === this.MAXIMUM_TEMPRATURE_PSM_OFF;
  }
  return this.temprature === this.MAXIMUM_TEMPRATURE_PSM_ON;
}

Thermostat.prototype.isPowerSavingMode = function() {
  return this.PowerSavingMode === true;
}

Thermostat.prototype.isPowerSavingModeOff = function() {
  return this.PowerSavingMode = false;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PowerSavingMode = true;
}

Thermostat.prototype.up = function() {
  if (this.isMaximumTemprature()) {
    return;

  }

  this.temprature += 1;
}

Thermostat.prototype.down = function() {
  if (this.isMinimumTemprature()) {
    return;
  }
  this.temprature -= 1;
}

Thermostat.prototype.reset = function() {
  return this.temprature = this.DEFAULT_TEMPRATURE;

};

Thermostat.prototype.energyUsage = function() {
  if (this.temprature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temprature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temprature <= this.MAXIMUM_TEMPRATURE_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
