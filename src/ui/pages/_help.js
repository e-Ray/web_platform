import React, { Component } from 'react';

class HelpPage extends Component {

  render() {
    return (

      <div id="container">
        <h1 id="help0">Help page</h1>
        <h4> The following page helps you with using the application. You can click on an entry to get help for the corresponding topic. </h4>
        <div id="row">
          <h3><a href="#help1"> Dashboard - Read values
          </a></h3>
        </div>

        <div id="row">
          <h3><a href="#help2"> Detailseite - Set an interval
          </a></h3>
        </div>

        <div id="row">
          <h3><a href="#help3"> Logout
          </a></h3>
        </div>

        <div id="row">
          <div id="help1">
            <h4>Dashboard - Read values</h4><br />
            <br />
            <p id="helppassage">You have different possibilities to read values on your dashboard.<br />
              All eight sensors are going to be displayed and you can read the desired value by hovering over the graph. It should look similar to the following picture.<br />
              <br />
              <img src={require('../../images/help1_en.png')} id="helpimage" alt="" /> <br />
              <br />
              For more detailed information you need to go the detail page for each sensor. You can access a detail page by pressing the title bar for the corresponding sensor as seen in the following picture. Another method is by using the menu in the top left corner.<br />
              <br />
              <img src={require('../../images/help2_en.png')} id="helpimage" alt="" /> <br />
              <br />
            </p>
            <p id="helpbtt"><a href="#help0">Back to the top</a></p>
          </div>
        </div>
        <div id="row">
          <div id="help2">
            <h4>Detailseite - Set an interval</h4><br />
            <br />
            <p id="helppassage">On a detail page you can set custom intervals in order to see exactly which value was measured at a set point in time.<br />
                To set an interval you need to press the button in the top right corner (as seen in the picture below) and choose an option from the dropdown menu.<br />
              <br />
              <img src={require('../../images/help3_en.png')} id="helpimage" alt="" /> <br />
              <br />
                You also have the possibility to set your own custom interval. To do this you need to choose the "Custom" entry from the dropdown menu. After that you can set the desired custom date as seen below: <br />
              <br />
              <img src={require('../../images/help4_en.png')} id="helpimage" alt="" /> <br />
              <br />
                First, you need to click on "From" in order to set the starting date for your interval. A mask will open where you can choose the date.<br />
                To set the end date you need to click on "To" and also choose a date from the mask. Click on "Ok" to let the graph show your values.<br />
              <br />
            </p>
            <p id="helpbtt"><a href="#help0">Back to the top</a></p>
          </div>
        </div>
        <div id="row">
          <div id="help3">
            <h4>Logout</h4><br />
            <br />
            <p id="helppassage">To logout you can access the "Logout" button in the top right at any given time.<br />
              <br /></p>
            <p id="helpbtt"><a href="#help0">Back to the top</a></p>
          </div>
        </div>

      </div>

    );
  }
}

export default HelpPage;
