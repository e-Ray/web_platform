# User Stories
 
## Bachelor-Praktikum - Riversense

| Name | Charting Component |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Seite möchte ich die Sensordaten in Graphen angezeigt bekommen. |  
| Akzeptanzkriterium | Im Dashboard werden die Graphen der Sensoren angezeigt. Die Graphen werden als Liniendiagramme dargestellt, wobei auf der x-Achse die Zeit angegeben ist und auf der y-Achse eine passende Skalierung und Beschriftung (je nach Graph). Beim Anklicken eines Knopfes unter dem Graphen werden wir korrekt auf die Detailseite des entsprechenden Graphen weitergeleitet. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 29.11.2016 |  
| Tatsächlicher Aufwand | 2.5 Stunden |  
| Velocity | 2.5/1 = 2.5 |  
| Bemerkungen | - |  
| ID | 1 |  

----------

| Name | Charting Component - DB-Anbindung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Daten der Graphen korrekt angezeigt bekommen. |  
| Akzeptanzkriterium | Im Graphen des Dashboard werden die korrekten Daten der letzten zwei Wochen angezeigt. | 
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | 27.12.2016 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | 11/5 = 2.2 |  
| Bemerkungen | - |   
| ID | 2 |  

----------

| Name | Sensor Detail Pages - Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich durch Knopfdruck auf eine Detailseite des zum Knopf zugehörigen Graphen gelangen. | 
| Akzeptanzkriterium | Für jeden Graphen existiert eine entsprechende Detailseite. Außerdem ist unter jedem Graphen im Dashboard ein Button, der beim Anklicken per React-Router auf die richtige Detailseite verlinkt. |  
| Geschätzter Aufwand | 1 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 05.12.2016 |  
| Tatsächlicher Aufwand | 2.5 Stunden |  
| Velocity | 2.5/1 = 2.5 |  
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
| Tatsächlicher Aufwand | 10 Stunden | 
| Velocity | 10/5 = 2 |  
| Bemerkungen | - |   
| ID | 4 |  

----------

| Name | Sensor Detail Pages - Zeiteinschränkung (DB-Anbindung) |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf den Detailseiten die Zeiträume der Graphen beschränken können. |  
| Akzeptanzkriterium | Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend und die Werte werden korrekt aus der Datenbank gelesen und angezeigt. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | 04.01.2017 |  
| Tatsächlicher Aufwand | 28 Stunden |  
| Velocity | 28/5 = 4.6	 |  
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
| Geschätzter Aufwand | 3 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 05.12.2016 |  
| Tatsächlicher Aufwand | 10.5 Stunden |  
| Velocity | 10.5/3 = 3.5 |  
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
| Tatsächlicher Aufwand | 18 Stunden |  
| Velocity | 18/5 = 3.6 |  
| Bemerkungen | - |   
| ID | 8 |  

----------

| Name | Basic User Authentication |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapplikation möchte ich mich auf der Seite anmelden, sowie ein-und ausloggen können. Der Vorgang soll über Eingabe der E-Mail und des Passworts funktionieren. |  
| Akzeptanzkriterium | Es wird ein Dialog angezeigt, der es dem Benutzer ermöglicht sich auf der Webseite zu registrieren. Nach der Registrierung kann sich der Benutzer mit seinen festgelegten Daten (E-Mail und Passwort) auf der Seite anmelden. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 16.12.2016  |  
| Tatsächlicher Aufwand | 14 Stunden |  
| Velocity | 14/5 = 2.8 |  
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
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/0.5 = 3 |  
| Bemerkungen | - |   
| ID | 10 |  

----------

| Name | Login - korrekte Funktionalität |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich mich nur mit meinen Daten einloggen können. Beim Ausloggen werde ich auf die Startseite geschickt und ich kann nicht in einem zweiten Browser oder einem zweiten Browsertab weiterhin eingelogt auf der Seite bleiben. |  
| Akzeptanzkriterium | Beim Login werden nur korrekte Daten akzeptiert. Bei einer fehlerhaften Eingabe wird dies dem Benutzer per Textmeldung mitgeteilt. Nach dem Ausloggen kommt der Benutzer mittels React-Router auf die Startseite und hat auch nicht die Möglichkeit mittels zweitem Browser oder zweitem Browsertab weiterhin auf der Seite eingelogt zu bleiben. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 17.12.2016 |  
| Tatsächlicher Aufwand | 13 Stunden |  
| Velocity | 13/5 = 2.6 |  
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

| Name | Detailseite - Eigener Zeitraum |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Möglichkeit haben mir jeden Zeitraum an Daten anzeigen zu lassen. |  
| Akzeptanzkriterium | Die Zeitspanne wird auf einem Kalender ausgewählt. Nach Auswählen und klicken des ‚OK‘-Buttons wird der dazugehörige Graph angezeigt. |  
| Geschätzter Aufwand | 7 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 07.01.2017 |  
| Tatsächlicher Aufwand | 26 Stunden |  
| Velocity | 26/7 = 3.7 |  
| Bemerkungen | - |   
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
| Tatsächlicher Aufwand | 1.5 Stunde |  
| Velocity | 1.5/0.5 = 3 |  
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
| ID | 21 |  

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
| ID | 22 |  

----------
| Name | Admin Account Funktionalität |  
| -------------- | --------------- |  
| Beschreibung | Als Admin brauche ich die Rechte alle Nutzer und Daten von Erays einlesen zu können. |  
| Akzeptanzkriterium | Als Admin hat man das Recht die komplette Datenbank zu lesen/beschreiben. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 03.02.2017 |  
| Tatsächlicher Aufwand | 2.5 Stunden |  
| Velocity | 2.5/1 = 2.5 |  
| Bemerkungen | - |   
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

| Name | Benutzbarkeit - Englische Sprache |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich, dass alle Begriffe in einer Sprache (Englisch) angezeigt werden. |  
| Akzeptanzkriterium | Alle derzeit existierenden deutschen Begriffe werden durch die entsprechenden englischen Wörter ersetzt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Dominik Schuster |  
| Umgesetzt | 14.03.2017 |  
| Tatsächlicher Aufwand | 1 Stunde |  
| Velocity | 1/0.5 = 2 |  
| Bemerkungen | - | 
| ID | 27 | 

----------

| Name | Admin-Dashboard |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich nach dem einloggen eine Übersicht über alle existierenden Erays und über alle existierenden User. |  
| Akzeptanzkriterium | Es werden 2 Listen angezeigt. Diese enthalten jeweils alle User bzw. alle Erays. |  
| Geschätzter Aufwand | 6 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 01.03.2017 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | 11/6 = 1,83 |  
| Bemerkungen | Die Listen Einträge sollen später Funktionalitäten enthalten, welche es ermöglichen weitere Komponenten zu öffnen |
| ID | 28 |  

----------

| Name | Eray-Card |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich auf einen Eray Eintrag in der Liste der existierenden Erays auf dem Dashboard klicke, eine Karte dieses Erays sehen, welche mir den Besitzer, Standort und ID dieses Erays anzeigt. |  
| Akzeptanzkriterium | Nach einem Klick auf einen Eray Listen Eintrag wird die korrekte zugehörige Karte angezeigt. Dabei werden die korrekten Informationen des Erays angezeigt. |  
| Geschätzter Aufwand | 1 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 10.03.2017 |  
| Tatsächlicher Aufwand | 3 Stunden |  
| Velocity | 3/1 = 3 |  
| Bemerkungen | Die Karte soll später die Funktionalität enthalten, welche es ermöglicht weitere Komponenten zu öffnen.|
| ID | 29 |  

----------

| Name | User-Card |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich auf einen User Eintrag in der Liste der existierenden User auf dem Dashboard klicke, eine Karte dieses Users sehen, welche mir die E-Mail, den Namen und eine Liste der Erays, welche dieser User besitzt. |  
| Akzeptanzkriterium | Nach einem Klick auf einen User Listen Eintrag wird die korrekte zugehörige Karte angezeigt. Dabei werden die korrekten Informationen des Users und eine korrekte Liste der Erays angezeigt. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek, Anja Kirchhöfer |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 5 Stunden |  
| Velocity | 5/2 = 2,5 |  
| Bemerkungen | - |
| ID | 30 |  

----------

| Name | User-Card: Eray Zuweisen |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich mich auf einer User Card befinde, die Möglichkeit haben diesem User Erays zuzuweisen, sodass dieser diese dann besitzt. |  
| Akzeptanzkriterium | Nach einem Klick auf einen Button auf einer User Card wird eine Liste der aktuell nicht besitzenden Erays angezeigt. Mit einem Klick auf einen dieser Eray Einträge wird dem User dieses Eray zugewiesen.  |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 4.5 Stunden |  
| Velocity | 4.5/2 = 2.25 |  
| Bemerkungen | - |
| ID | 31 |  

----------

| Name | User-/Eray-Card: Eray Daten einsehen |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich mich auf einer User Card oder Eray Card befinde, die Möglichkeit haben wenn ich auf einen Eray Eintrag klicke die Sensordaten dieses Erays einsehen können. |  
| Akzeptanzkriterium | Nach einem Klick auf eine Eray Card wird ein Drawer geöffnet, welcher die Sensordaten anzeigt. Dabei wird die Komponente für Sensordetailpages benutzt.  |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 2 Stunden |  
| Velocity | 2/2 = 1 |  
| Bemerkungen | Diese Funktionalität gilt nicht für die Eray Einträge, die sich in der Liste der zuweisbaren Erays befinden.|
| ID | 32 |  

----------
| Name | Rest API |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich Daten von e.Rays über eine Rest API abrufen können|  
| Akzeptanzkriterium | Nach einer Anfrage werden die angeforderten Daten im JSON Format zurückgeliefert. Eine Herausgabe von Leistung und Umdrehungsanzahl, sowie Besitzer findet nicht statt. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Simon Schmidt |  
| Umgesetzt | 09.03.2017 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | 11/5 = 2.2|  
| Bemerkungen | - |
| ID | 33 |  

----------
| Name | Rest API Anfrageparameter |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich bestimmen können welche Sensordaten ich bei einer Anfrage an die Rest API von welchem e.Ray erhalte und aus welchem Zeitfenster diese stammen. |  
| Akzeptanzkriterium | Nach einer Anfrage werden die angeforderten Daten im JSON Format zurückgeliefert. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Simon Schmidt |  
| Umgesetzt | 13.03.2017 |  
| Tatsächlicher Aufwand | 9.5 Stunden |  
| Velocity | 9.5/5 = 1.9 |  
| Bemerkungen | Die Herausgabe von Daten zu Leistung und Umdrehungszahl findet weiterhin nicht statt|
| ID | 34 |  

----------
| Name | Rest API Authentifikation |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Leistung und Umdrehungszahl meines e.Rays über die Rest API abrufen können.|  
| Akzeptanzkriterium | Nach einer Anfrage werden die angeforderten Daten im JSON Format zurückgeliefert, sofern der Nutzer bei der Anfrage ein gültiges Authentifikationstoken angegeben hat. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Simon Schmidt |  
| Umgesetzt | 16.03.2017 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | 11/5 = 2.2 |  
| Bemerkungen | - |
| ID | 35 |  

----------

| Name | Detail-Seite: Range erweitern |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf der Detail-Seite die Möglichkeit haben mir die Werte des aktuellen Tages anzeigen zu lassen. | 
| Akzeptanzkriterium | In dem Dropout-Button auf den Detail-Seiten wird eine Möglichkeit "1 Day" angezeigt. Klickt man darauf werden die richtigen Daten des aktuellen Tages im Graph angezeigt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 22.03.2017 |  
| Tatsächlicher Aufwand | 0.5 Stunden |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | - |
| ID | 36 |  

----------

| Name | User-Card: Eray Zuweisung aufheben |  
| -------------- | --------------- |  
| Beschreibung | Als Admin möchte ich, wenn ich mich auf einer User Card befinde, die Möglichkeit haben die Eray Zuweisungen aufzuheben, sodss dieser diese dann nicht mehr besitzt.|
| Akzeptanzkriterium | Auf der User Card gibt es einen Button, welcher die Zuweisung aufhebt. Danach soll die Liste der besitzten Erays sofort aktualisieren. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 22.03.2017 |  
| Tatsächlicher Aufwand | 12 Stunden |  
| Velocity | 12/4 = 3 |  
| Bemerkungen | - |
| ID | 37 |  

----------


| Name | Entwicklerdokumentation |  
| -------------- | --------------- |  
| Beschreibung | Als Entwickler möchte ich eine Dokumentation zur Funktionsweise und Aufbau des Projektes abrufen können.|
| Akzeptanzkriterium | Es gibt eine Dokumentation und ein Wiki in GitHub. |  
| Geschätzter Aufwand | 3 Story Points |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | 22.03.2017 |  
| Tatsächlicher Aufwand | 9 Stunden |  
| Velocity | 9/3 = 3 |  
| Bemerkungen | - |
| ID | 38 |  

----------
| Name | Internationalisierung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Sprache einstellen können.|
| Akzeptanzkriterium | i18n ist vollständig funktionsfähig und es ist standardmäßig die vom Browser genutzte Sprache eingestellt. |  
| Geschätzter Aufwand | 8 Story Points |  
| Entwickler | Kay Wallaschek, Simon Schmidt |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | 25 Stunden |  
| Velocity | 25/8=3.3 |  
| Bemerkungen | - |
| ID | 39 |  

----------
| Name | Hilfe als Pop-Up-Fenster |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf jeder Seite individuelle Hilfe bekommen.|
| Akzeptanzkriterium | Es gibt einen Hilfe-Button in der Kopfzeile. Wenn man auf diesen Klickt, wird der Text der Hilfe-Seite in einem Pop-Up-Fenster angezeigt, der sich auf die aktuelle Seite bezieht. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Anja Kirchhöfer |  
| Umgesetzt | 29.03.2017 |  
| Tatsächlicher Aufwand | 8 Stunden |  
| Velocity | 8/4 = 2 |  
| Bemerkungen | - |
| ID | 40 |  

----------

Anmerkung:
Der Tatsächliche Aufwand umfasst nur die Implementation, nicht die Recherche bzw. Einarbeitung in spezielle Bibliotheken. Dafür müssen zusätzlich ca. 80 Stunden berechnet werden. Also insgesamt ein Aufwand von ca. 350 Stunden für die oben genannten User Stories.


Last Edited: 03/29/2017 2:34 PM 
