import React, { Component } from 'react';


class HelpDrawer extends Component {

let routeName = this.context.router.getCurrentRouteName();
console.log("Route: " + routeName);

render(){
  return (
    <div>
      HelpDrawer
    </div>
  );
}

}

export default HelpDrawer;
