import React, { Component } from 'react';

class HelpPage extends Component {

  render() {
    return (

      <div id="container">
        <h1 id="help0">Hilfe</h1>
        <h4>Im Nachfolgenden finden sie Hilfe zur Bedienung der Webapplikation. Klicken Sie auf einen Eintrag um dafür Hilfe zu erhalten.</h4>
        <div id="row">
          <h3><a href="#help1"> Dashboard - Werte ablesen
          </a></h3>
        </div>

        <div id="row">
          <h3><a href="#help2"> Detailseite - Zeitraum einstellen
          </a></h3>
        </div>

        <div id="row">
          <h3><a href="#help3"> Logout
          </a></h3>
        </div>

        <div id="row">
          <div id="help1">
            <h4>Dashboard - Werte ablesen</h4><br />
            <br />
            <p id="helppassage">Auf dem Dashboard haben Sie als Benutzer verschiedene Möglichkeiten ihre Werte gezielt abzulesen.<br />
              Es werden ihnen alle acht Sensoren angezeigt und Sie können wie in Abbildung 1 mit der Maus für das gewünschte Datum im Graphen den Wert ablesen. <br />
              <br />
              <img src={require('../../images/help1.png')} id="helpimage" role="presentation" /> <br />
              <br />
              Für detailliertere Informationen müssen Sie die Detailseite des entsprechenden Sensors aufrufen. Dies ist möglich per Mausklick auf die Titelleiste des Sensors (Abbildung 2) oder durch die Verwendung des Menüs in der oberen, linken Ecke.<br />
              <br />
              <img src={require('../../images/help2.png')} id="helpimage" role="presentation" /> <br />
              <br />
            </p>
            <p id="helpbtt"><a href="#help0">Zurück zum Seitenanfang</a></p>
          </div>
        </div>
        <div id="row">
          <div id="help2">
            <h4>Detailseite - Zeitraum einstellen</h4><br />
            <br />
            <p id="helppassage">Auf den Detailseiten können Sie detailliertere Zeiträume einstellen um so genau zu sehen, welchen Wert der Sensor an einem bestimmten Datum gemessen hat.<br />
                Um einen Zeitraum einzustellen müssen Sie auf den Knopf in der oberen rechten Ecke (Abbildung 3) drücken und können anschließend aus dem Dropdown-Menü eine Option auswählen.<br />
              <br />
              <img src={require('../../images/help3.png')} id="helpimage" role="presentation" /> <br />
              <br />
                Sie haben ebenfalls die Möglichkeit einen selbst festgelegten Zeitraum einzustellen. Hierfür wählen Sie zunächst aus dem Dropdown-Menü die Option "Custom". Anschließend können Sie in den über dem Graphen befindlichen Feldern ihr gewünschtes Datum wie im Folgenden gezeigt auswählen:<br />
              <br />
              <img src={require('../../images/help4.png')} id="helpimage" role="presentation" /> <br />
              <br />
                Klicken Sie zunächst auf das Feld "Von" um den Start des Zeitraums festzulegen. Es öffnet sich eine Maske, in der Sie ein Datum auswählen können.<br />
                Um das Ende des Zeitraums einzustellen, klicken sie auf das Feld "Bis" und wählen Sie ebenfalls ein Datum aus der Maske. Beim anschließenden Klicken auf den "Ok"-Knopf wird ihr eingestellter Zeitraum übernommen und der Graph zeigt Ihnen die Werte an.<br />
              <br />
            </p>
            <p id="helpbtt"><a href="#help0">Zurück zum Seitenanfang</a></p>
          </div>
        </div>
        <div id="row">
          <div id="help3">
            <h4>Logout</h4><br />
            <br />
            <p id="helppassage">Um sich auszuloggen können Sie jederzeit auf den "Logout"-Knopf in der oberen, rechten Ecke klicken und werden automatisch ausgeloggt.<br />
              <br /></p>
            <p id="helpbtt"><a href="#help0">Zurück zum Seitenanfang</a></p>
          </div>
        </div>

      </div>

    );
  }
}

export default HelpPage;
