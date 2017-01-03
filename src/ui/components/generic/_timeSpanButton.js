import React from 'react';
import { DropoutButton } from './_dropoutButton';

export default function timeRange(mode, timeSpan, handler){
  if(mode === "detail"){
    return <div id="timeButton"><DropoutButton timeSpan={ timeSpan } handler={ handler }/></div>
  }else return;
};