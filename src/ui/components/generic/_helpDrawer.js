import React from 'react';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


//let name = document.location.pathname;

class HelpDrawer extends React.Component {

  constructor(props) {
    super(props);
  }

  getActualPage(){
    let name = window.location.pathname;
    console.log("Pathname: " + name);
    if(name === "/dashboard"){
      return <h3>Hilfe für das Dashboard</h3>;
    }else if(name.match("/DetailPage")){
      return <h3>Hilfe für Detailseiten</h3>;
    }else if(name === "/InfoPage"){
      return <h3>Hilfe für Info-Seite</h3>;
    }else return <h3>Sie sind bereits auf der Hilfe-Seite</h3>;
  }


  render() {
    return (
      <div>
        <Dialog
          title="Help"

          modal={false}
          open={this.props.open}
          onRequestClose={this.props.close}
        >
          <h3>Das ist der Hilfe Drawer</h3>
          { this.getActualPage() }
        </Dialog>
      </div>);
  }

}
HelpDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired,
  close: React.PropTypes.func.isRequired,
};

export default HelpDrawer;
