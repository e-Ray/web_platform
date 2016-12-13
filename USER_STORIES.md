# User Stories
# 
 
## Bachelor-Praktikum - Riversense

| Name | Charting Component |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Seite möchte ich die Sensordaten in diversen Graphen angezeigt bekommen. Ich möchte einen Graphen durch Klicken auf den Titel ein-und ausblenden können. Ebenfalls habe ich die Möglichkeit den Zeitraum der angezeigten Daten festzulegen. |  
| Akzeptanzkriterium | Im Dashboard werden die Graphen für Wasserstand, PH-Wert, _**TODO: usw.**_ mit den korrekten Daten der letzten zwei Wochen angezeigt. Beim Klick auf den Titel eines Graphen wird dieser ausgeblendet und bei erneutem Anklicken wieder eingeblendet. Die Graphen werden als Liniendiagramme dargestellt, wobei auf der x-Achse die Zeit angegeben ist und auf der y-Achse eine passende Skalierung und Beschriftung (je nach Graph). Beim Anklicken eines Knopfes unter dem Graphen werden wir korrekt auf die Detailseite des entsprechenden Graphen weitergeleitet. Dort wird dem Benutzer der korrekte Graph als Liniendiagramm angezeigt. Außerdem gibt es ein Dropdown-Menü, in welchem verschiedene Zeiträume ausgewählt werden können, die beim Anklicken den Graphen auf den ausgewählten Zeitraum beschränken und die richtigen Daten korrekt anzeigt. |  
| Geschätzter Aufwand | _**TODO: x Story Points**_ |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | am 29.11.2016 in Iteration 1 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | _**TODO: 1.5/Story Points**_ |  
| Bemerkungen | Eng verknüpft mit "Sensor Detail Pages"-User Story |  

----------

| Name | Sensor Detail Pages |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich durch Knopfdruck auf eine Detailseite des zum Knopf zugehörigen Graphen gelangen. Auf dieser Detailseite möchte ich die Möglichkeit haben die Graphen auf einen ausgewählten Zeitraum zu beschränken. |  
| Akzeptanzkriterium | Für jeden Graphen existiert eine entsprechende Detailseite. Unter jedem Graphen im Dashboard ist ein Button, der beim Anklicken auf die richtige Detailseite verlinkt. Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend und zeigt korrekt die Werte an. |  
| Geschätzter Aufwand | _**TODO: x Story Points**_ |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | am 05.12.2016 in Iteration 1 |  
| Tatsächlicher Aufwand | 10 Stunden |  
| Velocity | _**TODO: 10/Story Points**_ |  
| Bemerkungen | Eng verknüpft mit "Charting Component"-User Story |  

----------

| Name | Setup Initial Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapp möchte ich von der Homepage zum Dashboard und zu den Settings gelangen können. |  
| Akzeptanzkriterium | Im Menü gibt es zwei Buttons, einer mit Beschriftung "Dashboard" und einer mit der Beschriftung "Einstellungen". Beim Anklicken einer der Buttons werde ich zur korrekten Seite gebracht. |  
| Geschätzter Aufwand | _**TODO: x Story Points**_ |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | am 25.11.2016 in Iteration 1 |  
| Tatsächlicher Aufwand | 4 Stunden |  
| Velocity | _**TODO: 4/Story Points**_ |  
| Bemerkungen | / |  

----------

| Name | Dashboard |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich nach dem Einloggen mein Dashboard angezeigt bekommen. Im Dashboard möchte ich die Sensordaten der letzten zwei Wochen sehen können. |  
| Akzeptanzkriterium | Im Dashboard werden alle Graphen als Liniendiagramme angezeigt. Auf der x-Achse befindet sich die Zeit, also die letzten zwei Wochen und auf der y-Achse passende Werte und Skalierungen, je nach Sensor. Die Graphen zeigen korrekte Daten an. |  
| Geschätzter Aufwand | _**TODO: x Story Points**_ |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | am 05.12.2016 in Iteration 1 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | _**TODO: 1.5/Story Points**_ |  
| Bemerkungen | / |  

----------

| Name | Setup Basic Layout |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapp möchte ich auf jeder Seite folgende Basis-Funktionalitäten haben: Mir wird ein Menü angezeigt, mit dessen Hilfe ich zwischen den diversen Seiten navigieren kann. Außerdem habe ich die Möglichkeit mich auszuloggen. |  
| Akzeptanzkriterium | Auf jeder Seite wird das Menü korrekt angezeigt. Beim Druck auf den Menü-Button wird dieses geöffnet und am linken Bildschirmrand angezeigt. Es gibt zusätzlich zu den Buttons für jede Detailseite einen Dashboard-Button, einen Einstellungs-Button und einen Home-Button. Beim Drücken einer der Buttons wird man zur korrekten Seite gebracht. Es wird ein Knopf zum Ausloggen angezeigt, welcher den Benutzer beim Andrücken erfolgreich auslogt. |  
| Geschätzter Aufwand | _**TODO: 8 Story Points**_ |  
| Entwickler | Anja Kirchhöfer, Dominik Schuster, Kay Wallaschek, Simon Schmidt |  
| Umgesetzt | Letzte Bearbeitung am 07.12.2016 |  
| Tatsächlicher Aufwand | 11 Stunden |  
| Velocity | _**TODO: 11/ (8) Story Points**_ |  
| Bemerkungen | Noch nicht fertig implementiert. Einstellungs-Button und Logoutfunktion fehlend. |  

----------

| Name | User Authentication |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapplikation möchte ich mich auf der Seite anmelden, sowie ein-und ausloggen können. Der Vorgang soll über Eingabe der E-Mail und des Passworts funktionieren. |  
| Akzeptanzkriterium | Es wird ein Dialog angezeigt, der es dem Benutzer ermöglicht sich auf der Webseite zu registrieren. Nach der Registrierung kann sich der Benutzer mit seinen festgelegten Daten (E-Mail und Passwort) auf der Seite anmelden. Es werden nur korrekte Anmeldeinformationen verarbeitet und der Benutzer bekommt bei fehlerhaften Informationen eine Fehlermeldung. Nach erfolgreichem Login wird dem Benutzer sein persönliches Dashboard angezeigt. |  
| Geschätzter Aufwand | _**TODO: x Story Points**_ |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | Letzte Bearbeitung am 12.12.2016  |  
| Tatsächlicher Aufwand | 4.5 Stunden |  
| Velocity | _**TODO: 4.5/ Story Points**_ |  
| Bemerkungen | Noch nicht fertig implementiert. |  



----------
### Todo:
- [ ] Alle User-Stories: Story Points festlegen und Velocity daraus berechnen
- [ ] Charting-Component: Herausfinden welche Graphen wir noch benötigen


----------

Last Edited: 12/13/2016 6:24:10 AM 