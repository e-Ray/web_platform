import React from 'react';

export default function TimeSpan(time){
	this.time = time;
}
TimeSpan.prototype.set = function(timeRange) {
  this.time = timeRange;

  //console.log('time set to '+timeRange);
};
TimeSpan.prototype.get = function() {
  //console.log('time got');
  return this.time;
};