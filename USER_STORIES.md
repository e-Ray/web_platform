# User Stories
 
## Bachelor-Praktikum - Riversense

| Name | Charting Component |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Seite möchte ich die Sensordaten in diversen Graphen angezeigt bekommen. Ich möchte einen Graphen durch Klicken auf den Titel ein-und ausblenden können. Ebenfalls habe ich die Möglichkeit den Zeitraum der angezeigten Daten festzulegen. |  
| Akzeptanzkriterium | Im Dashboard werden die Graphen für Wasserstand und PH-Wert angezeigt. Beim Klick auf den Titel eines Graphen wird dieser ausgeblendet und bei erneutem Anklicken wieder eingeblendet. Die Graphen werden als Liniendiagramme dargestellt, wobei auf der x-Achse die Zeit angegeben ist und auf der y-Achse eine passende Skalierung und Beschriftung (je nach Graph). Beim Anklicken eines Knopfes unter dem Graphen werden wir korrekt auf die Detailseite des entsprechenden Graphen weitergeleitet. Dort wird dem Benutzer der entsprechende Graph als Liniendiagramm angezeigt. Außerdem gibt es ein Dropdown-Menü, in welchem verschiedene Zeiträume ausgewählt werden können, die beim Anklicken den Graphen auf den ausgewählten Zeitraum beschränken. Die auswählbaren Zeiträume sind 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate und 1 Jahr. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 29.11.2016 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/1 = 1.5 |  
| Bemerkungen | - |  
| ID | 1 |  

----------

| Name | Charting Component - DB-Anbindung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Daten der Graphen korrekt angezeigt bekommen. |  
| Akzeptanzkriterium | Im Graphen des Dashboard werden die korrekten Daten der letzten zwei Wochen angezeigt. | 
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | 27.12.2016 |  
| Tatsächlicher Aufwand | 3 Stunden |  
| Velocity | 3/2 = 1.5 |  
| Bemerkungen | - |   
| ID | 2 |  

----------

| Name | Sensor Detail Pages - Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich durch Knopfdruck auf eine Detailseite des zum Knopf zugehörigen Graphen gelangen. | 
| Akzeptanzkriterium | Für jeden Graphen existiert eine entsprechende Detailseite. Außerdem ist unter jedem Graphen im Dashboard ein Button, der beim Anklicken per React-Router auf die richtige Detailseite verlinkt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 05.12.2016 |  
| Tatsächlicher Aufwand | 0.5 Stunden |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | - |   
| ID | 3 |  

----------

| Name | Sensor Detail Pages - Graphanzeige |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf den einzelnen Detailseiten den entsprechenden Graphen angezeigt bekommen. |  
| Akzeptanzkriterium | Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 05.12.2016 |  
| Tatsächlicher Aufwand | 9 Stunden | 
| Velocity | 9/5 = 1.8 |  
| Bemerkungen | - |   
| ID | 4 |  

----------

| Name | Sensor Detail Pages - Zeiteinschränkung (DB-Anbindung) |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf den Detailseiten die Zeiträume der Graphen beschränken können. |  
| Akzeptanzkriterium | Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend und die Werte werden korrekt aus der Datenbank gelesen und angezeigt. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | 04.01.2017 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | 11/4 = 2.75	 |  
| Bemerkungen | - |   
| ID | 5 |   

----------

| Name | Setup Initial Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapp möchte ich von der Homepage zum Dashboard gelangen können. |  
| Akzeptanzkriterium | Im Menü gibt es einen Button mit Beschriftung "Dashboard". Beim Anklicken des Buttons werde ich mittels React-Router zur korrekten Seite gebracht. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 25.11.2016 |  
| Tatsächlicher Aufwand | 4 Stunden |  
| Velocity | 4/2 = 2 |  
| Bemerkungen | - |   
| ID | 6 |  

----------

| Name | Dashboard |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich nach dem Einloggen mein Dashboard angezeigt bekommen. Im Dashboard möchte ich die Sensordaten der letzten zwei Wochen sehen können. |  
| Akzeptanzkriterium | Im Dashboard werden alle Graphen als Liniendiagramme angezeigt. Auf der x-Achse befindet sich die Zeit, also die letzten zwei Wochen und auf der y-Achse passende Werte und Skalierungen, je nach Sensor. Die Graphen zeigen korrekte Daten an. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 05.12.2016 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/1 = 1.5 |  
| Bemerkungen | - |   
| ID | 7 |  

----------

| Name | Setup Basic Layout |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapp möchte ich auf jeder Seite folgende Basis-Funktionalitäten haben: Mir wird ein Menü angezeigt, mit dessen Hilfe ich zwischen den diversen Seiten navigieren kann. Außerdem habe ich die Möglichkeit mich auszuloggen. |  
| Akzeptanzkriterium | Auf jeder Seite wird das Menü korrekt angezeigt. Beim Druck auf den Menü-Button wird dieses geöffnet und am linken Bildschirmrand angezeigt. Es gibt zusätzlich zu den Buttons für jede Detailseite einen Dashboard-Button und einen Home-Button. Beim Drücken einer der Buttons wird man mittels React-Router zur korrekten Seite gebracht. Es wird ein Knopf zum Ausloggen angezeigt, welcher den Benutzer beim Andrücken erfolgreich auslogt. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Anja Kirchhöfer, Dominik Schuster, Kay Wallaschek, Simon Schmidt |  
| Umgesetzt | 23.12.2016 |  
| Tatsächlicher Aufwand | 14 Stunden |  
| Velocity | 14/5 = 2.8 |  
| Bemerkungen | - |   
| ID | 8 |  

----------

| Name | Basic User Authentication |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapplikation möchte ich mich auf der Seite anmelden, sowie ein-und ausloggen können. Der Vorgang soll über Eingabe der E-Mail und des Passworts funktionieren. |  
| Akzeptanzkriterium | Es wird ein Dialog angezeigt, der es dem Benutzer ermöglicht sich auf der Webseite zu registrieren. Nach der Registrierung kann sich der Benutzer mit seinen festgelegten Daten (E-Mail und Passwort) auf der Seite anmelden. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 16.12.2016  |  
| Tatsächlicher Aufwand | 5 Stunden |  
| Velocity | 5/2 = 2.5 |  
| Bemerkungen | - |   
| ID | 9 |  

----------

| Name | Login - Weiterleitung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich nach dem Einloggen automatisch zu meinem Dashboard gelangen. |  
| Akzeptanzkriterium | Nach erfolgreichem Login wird dem Benutzer sein persönliches Dashboard angezeigt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 16.12.2016  |  
| Tatsächlicher Aufwand | 1 Stunden |  
| Velocity | 1/0.5 = 2 |  
| Bemerkungen | - |   
| ID | 10 |  

----------

| Name | Login - korrekte Funktionalität |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich mich nur mit meinen Daten einloggen können. Beim Ausloggen werde ich auf die Startseite geschickt und ich kann nicht in einem zweiten Browser oder einem zweiten Browsertab weiterhin eingelogt auf der Seite bleiben. |  
| Akzeptanzkriterium | Beim Login werden nur korrekte Daten akzeptiert. Bei einer fehlerhaften Eingabe wird dies dem Benutzer per Textmeldung mitgeteilt. Nach dem Ausloggen kommt der Benutzer mittels React-Router auf die Startseite und hat auch nicht die Möglichkeit mittels zweitem Browser oder zweitem Browsertab weiterhin auf der Seite eingelogt zu bleiben. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 17.12.2016 |  
| Tatsächlicher Aufwand | 9 Stunden |  
| Velocity | 9/4 = 2.25 |  
| Bemerkungen | - |   
| ID | 11 |  

----------

| Name | Logout überall möglich |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich stets die Möglichkeit haben mich per Knopfdruck auszuloggen. |  
| Akzeptanzkriterium | Es gibt einen Logout-Button im Menü, welcher den Benutzer beim Andrücken korrekt auslogt. Dieser Button wird dem Benutzer auf jeder Seite der Webapp angezeigt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 17.12.2016 |  
| Tatsächlicher Aufwand | 1 Stunde |  
| Velocity | 1/0.5 = 2 |  
| Bemerkungen | - |   
| ID | 12 |  

----------

| Name | Dashboard-Grid |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte im Dashboard die Möglichkeit haben die verschiedenen Graphen zu verschieben und deren Größe zu verändern. |  
| Akzeptanzkriterium | Durch Implementierung eines Grid-Systems ist es möglich die im Dashboard existenten Graphen zu verschieben und deren Größe zu verändern. Verschoben wird durch Drag&Drop und das Verändern der Größe erfolgt durch Ziehen am Rahmen eines Graphen. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | - |  
| Velocity | - |  
| Bemerkungen | Vom Auftraggeber nicht explizit gewünscht. Priorität niedriger als andere Aufgaben, deshalb nicht mehr umgesetzt. |   
| ID | 13 |  

----------

| Name | Datumsformat |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich das Datum im Format gemäß der DIN-Norm 1355-1 (TT.MM.JJJJ_Stunde:Minute) ablesen können. |  
| Akzeptanzkriterium | Die Daten an den Graphen werden im oben beschriebenen Format korrekt dargestellt. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 1 Stunde |  
| Velocity | 1/1 = 1 |  
| Bemerkungen | - |   
| ID | 14 |  

----------

| Name | Einheitenbezeichnung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich erkennen, in welchen Einheiten die Daten der Graphen dargestellt werden. |  
| Akzeptanzkriterium | Zu jedem Graphen existiert eine Legende, in welcher die dargestellten Einheiten beschrieben werden. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 1 Stunde |  
| Velocity | 1/0.5 = 2 |  
| Bemerkungen | - |   
| ID | 15 |  

----------

| Name | "Custom"-Zeit Verbesserung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich das Einstellen eines spezifischen Zeitraums so komfortabel wie möglich vornehmen können. |  
| Akzeptanzkriterium | Beim anklicken auf den Dropdown-Button für den Custom-Zeitraum erscheint direkt ein Date-Picker, in welchem der gewünschte Zeitraum ausgewählt werden kann. |  
| Geschätzter Aufwand | 0.5 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 30 Minuten |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | - |   
| ID | 16 |  

----------

| Name | Dropdown-Button hervorheben |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich besser erkennen können, dass es einen Button gibt, mit welchem ich die verschiedenen Zeiträume festlegen kann. |  
| Akzeptanzkriterium | Im Dropdown-Button ist ein kleines Dreieck/ein kleiner Pfeil zu sehen, welcher die Erkennbarkeit verbessern soll. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 27.01.2017 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/0.5 = 3 |  
| Bemerkungen | - |   
| ID | 17 |  

----------

| Name | Übersichtlicheres Menü |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich im Menü direkt alle Sensoren sehen können. |  
| Akzeptanzkriterium | Alle Sensoren werden direkt im Menü angezeigt, ohne dass man vorher unnötig navigieren muss. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 27.01.2017 |  
| Tatsächlicher Aufwand | 30 Minuten |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | - |   
| ID | 18 |  

----------

| Name | Scrollbarkeit des Dashboards |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich intuitiv erkennen, dass ich im Dashboard scrollen kann um weitere Sensoren zu sehen. |  
| Akzeptanzkriterium | Das Padding am Rand ist breiter und es wird ein Pfeil-Icon in der unteren rechten Ecke des Bildschirms platziert. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | - |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | - |  
| Velocity | - |  
| Bemerkungen | Vom Auftraggeber explizit nicht gewünscht, deshalb nicht umgesetzt. |   
| ID | 19 |  

----------

| Name | Startseite |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich bereits auf der Startseite erkennen, dass ich mich auf der Webseite von e.Ray befinde. Außerdem möchte ich direkt mit der Login-Funktion konfrontiert werden, ohne sie erst suchen zu müssen. |  
| Akzeptanzkriterium | Die Startseite enthält mindestens ein Bild eines e.Rays, einen kurzen Text und das e.Ray Logo. Der Login-Btton wird mittig auf der Startseite platziert. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 03.02.2017 |  
| Tatsächlicher Aufwand | 3 Stunden |  
| Velocity | 3/2 = 1.5 |  
| Bemerkungen | - |   
| ID | 20 |  

----------

| Name | Design |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich, dass sich das Design der Webseite dem der existierenden e.Ray Webseite gleicht. |  
| Akzeptanzkriterium | Die Farbschemen der beiden Webseiten stimmen überein oder ähneln sich stark. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | - |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | - |  
| Velocity | - |  
| Bemerkungen | Vom Auftraggeber nicht gewünscht, da ein Designer nach Abschluss des Projektes diese User Story umsetzt. |   
| ID | 21 |  

----------

| Name | Kraftwerk-Informationen |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich allgemeine Informationenn zu meinem e.Ray abrufen können. |  
| Akzeptanzkriterium | Es existiert eine Seite, auf welcher mindestens ein Bild meines Kraftwerks, sowie dessen Standort und das Datum der Inbetriebnahme angezeigt werden. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 4 Stunden |  
| Velocity | 4/2 = 2 |  
| Bemerkungen | - |   
| ID | 22 |  

----------

| Name | Benutzbarkeit - Deutsche Sprache |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich, dass alle Begriffe in meiner Muttersprache (Deutsch) angezeigt werden. |  
| Akzeptanzkriterium | Alle derzeit existierenden englischen Begriffe werden durch die entsprechenden Deutschen Wörter ersetzt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Simon Schmidt |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 30 Minuten |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | Später Umstellung auf Englisch gewünscht. | 
| ID | 23 |  

----------

| Name | User Registration |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich mich für die Webapplikation mit einem Benutzernamen und einer E-Mail Adresse registrieren können. |  
| Akzeptanzkriterium | Es gibt einen Button auf der Startseite, der den Benutzer zum Registrierungsprozess weiterleitet. Hier kann der Benutzer seinen Namen und seine E-Mail Adresse (diese muss gültig sein) eingeben und diese Daten werden korrekt in die Datenbank übernommen. Das Passwort muss zwei Mal abgefragt werden. Der Benutzer kann sich daraufhin mit den angegebenen Daten einloggen. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Simon Schmidt, Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 27.02.2017 |  
| Tatsächlicher Aufwand | 6 Stunden |  
| Velocity | 6/4 = 2.5 |  
| Bemerkungen | - | 
| ID | 24 |  

----------

| Name | Hilfe-Seite |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich eine Hilfe-Seite angeboten bekommen, die mich bei der Benutzung der Webapplikation unterstützt. |  
| Akzeptanzkriterium | Es gibt einen Menüeintrag, der den Benutzer zur Hilfe-Seite weiterleitet. Auf der Hilfe-Seite findet der Benutzer sowohl Texte als auch Screenshots, die ihm bei der Verwendung des Dashboards, den Detailseiten und dem Ausloggen helfen. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Dominik Schuster, Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 7.5 Stunden |  
| Velocity | 7.5/4 = 1.875 |  
| Bemerkungen | - | 
| ID | 25 |  

----------

| Name | Dashboard Performance |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Graphen auf dem Dashboard schnell angezeigt bekommen und nicht lange warten müssen. |  
| Akzeptanzkriterium | Die Graphen des Dashboards werden in unter 5 Sekunden korrekt geladen und angezeigt. (Dies kann je nach Verbindung des Benutzers auch länger dauern.) |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 04.02.2017 |  
| Tatsächlicher Aufwand | 2.5 Stunden |  
| Velocity | 2.5/1 = 2.5 |  
| Bemerkungen | - | 
| ID | 26 |  

----------

| Name | Hilfe-Seite |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich eine Hilfe-Seite angeboten bekommen, die mich bei der Benutzung der Webapplikation unterstützt. |  
| Akzeptanzkriterium | Es gibt einen Menüeintrag, der den Benutzer zur Hilfe-Seite weiterleitet. Auf der Hilfe-Seite findet der Benutzer sowohl Texte als auch Screenshots, die ihm bei der Verwendung des Dashboards, den Detailseiten und dem Ausloggen helfen. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Dominik Schuster, Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 22.02.2017 |  
| Tatsächlicher Aufwand | 7.5 Stunden |  
| Velocity | 7.5/4 = 1.875 |  
| Bemerkungen | - | 
| ID | 27 |  

----------| Name | Admin-Dashboard |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich nach dem einloggen eine Übersicht über alle existierenden Erays und über alle existierenden User. |  
| Akzeptanzkriterium | Es werden 2 Listen angezeigt. Diese enthalten jeweils alle User bzw. alle Erays. |  
| Geschätzter Aufwand | 6 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 01.03.2017 |  
| Tatsächlicher Aufwand | ?? Stunden |  
| Velocity | ??/4 = ?? |  
| Bemerkungen | Die Listen Einträge sollten Funktionalitäten enthalten, welche es ermöglichen weitere Komponenten zu öffnen |
| ID | 28 |  

----------
| Name | Eray-Card |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich auf einen Eray Eintrag in der Liste der existierenden Erays auf dem Dashboard klicke, eine Karte dieses Erays sehen, welche mir den Besitzer, Standort und ID dieses Erays anzeigt. |  
| Akzeptanzkriterium | Es wurde die Funktionalität implementiert, dass man nach einem Klick auf einen Eray Listen Eintrag die korrekte zugehörige Karte angezeigt wird. Dabei werden die korrekten Informationen des Erays angezeigt. |  
| Geschätzter Aufwand | 1 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 10.03.2017 |  
| Tatsächlicher Aufwand | 2 Stunden |  
| Velocity | 2/2 = 1 |  
| Bemerkungen | Die Karte sollte die Funktionalität enthalten, welche es ermöglicht weitere Komponenten zu öffnen.|
| ID | 29 |  

----------
| Name | User-Card |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich auf einen User Eintrag in der Liste der existierenden User auf dem Dashboard klicke, eine Karte dieses Users sehen, welche mir die E-Mail, den Namen und eine Liste der Erays, welche dieser User besitzt. |  
| Akzeptanzkriterium | Es wurde die Funktionalität implementiert, dass man nach einem Klick auf einen User Listen Eintrag die korrekte zugehörige Karte angezeigt wird. Dabei werden die korrekten Informationen des Users und eine korrekte Liste der Erays angezeigt. |  
| Geschätzter Aufwand | 1 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 2 Stunden |  
| Velocity | 2/2 = 1 |  
| Bemerkungen | - |
| ID | 30 |  

----------
| Name | User-Card: Eray Zuweisen |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich mich auf einer User Card befinde, die Möglichkeit haben diesem User Erays zuzuweisen, sodass dieser diese dann besitzt. |  
| Akzeptanzkriterium | Es wurde die Funktionalität implementiert, dass man nach einem Klick auf einen Button auf einer User Card eine Liste der aktuell nicht besäßenen Erays angezeigt. Mit einem Klick auf einen dieser Eray Einträge wird dem User dieser Eray zugewiesen. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 3,5 Stunden |  
| Velocity | 3,5/2 = 1,75 |  
| Bemerkungen | - |
| ID | 31 |  

----------
| Name | User-/Eray-Card: Eray Daten einsehen |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich mich auf einer User Card oder Eray Card befinde, die Möglichkeit haben wenn ich auf einen Eray Eintrag klicke die Sensordaten dieses Erays einsehen können. |  
| Akzeptanzkriterium | Es wurde die Funktionalität implementiert, dass man nach einem Klick auf eine Eray Card einen Drawer öffnet, welcher die Sensordaten anzeigt. Dabei wird die Komponente für Sensordetailpages benutzt.  |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 2 Stunden |  
| Velocity | 2/4 = 0,5 |  
| Bemerkungen | Diese Funktionalität gilt nicht für die Eray Einträge, die sich in der Liste der zuweißbaren Erays befinden.|
| ID | 32 |  

----------




Last Edited: 03/16/2017 8:00 PM 