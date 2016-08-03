'use strict';

function Plane(){}

Plane.prototype.land = function(airport){
  console.log(this)
  airport.clearForLanding(this);
  this._location = airport;
};
Plane.prototype.takeoff = function(airport){
  this._location.clearForTakeOff('');
};
