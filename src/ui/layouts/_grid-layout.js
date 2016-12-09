import React from 'react';
import { Footer } from '../components/generic';

var ReactGridLayout = require('react-grid-layout');
var footer = new Footer();

var GridLayout = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'footer', x: 0, y: 10, w: 10, h: 2, static: false},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'footer'}>
            { footer.render() }
        </div>

        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ReactGridLayout>
    )
  }
});

export default GridLayout;
