import React from 'react';


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.num = props.num;
  }
  render() {
    return <h1>test </h1>;
  }

}

export default Test;
