# User Stories
 
## Bachelor-Praktikum - Riversense

| Name | Charting Component |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Seite möchte ich die Sensordaten in diversen Graphen angezeigt bekommen. Ich möchte einen Graphen durch Klicken auf den Titel ein-und ausblenden können. Ebenfalls habe ich die Möglichkeit den Zeitraum der angezeigten Daten festzulegen. |  
| Akzeptanzkriterium | Im Dashboard werden die Graphen für Wasserstand und PH-Wert angezeigt. Beim Klick auf den Titel eines Graphen wird dieser ausgeblendet und bei erneutem Anklicken wieder eingeblendet. Die Graphen werden als Liniendiagramme dargestellt, wobei auf der x-Achse die Zeit angegeben ist und auf der y-Achse eine passende Skalierung und Beschriftung (je nach Graph). Beim Anklicken eines Knopfes unter dem Graphen werden wir korrekt auf die Detailseite des entsprechenden Graphen weitergeleitet. Dort wird dem Benutzer der entsprechende Graph als Liniendiagramm angezeigt. Außerdem gibt es ein Dropdown-Menü, in welchem verschiedene Zeiträume ausgewählt werden können, die beim Anklicken den Graphen auf den ausgewählten Zeitraum beschränken. Die auswählbaren Zeiträume sind 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate und 1 Jahr. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | am 29.11.2016 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/1 = 1.5 |  
| Bemerkungen | - |  

----------

| Name | Charting Component - DB-Anbindung |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich die Daten der Graphen korrekt angezeigt bekommen. Auch bei der Aushwal eines Zeitraumes sollen nur die Daten angezeigt werden, die in diesem Zeitraum gemessen wurden. |  
| Akzeptanzkriterium | Im Graphen des Dashboard werden die korrekten Daten der letzten zwei Wochen angezeigt. Beim Anklicken eines Zeitraumes wird der Graph korrekt auf die Werte aus dessen beschränkt und es werden tatsächlich nur die Werte aus dem ausgewählten Zeitraum angezeigt. Die auswählbaren Zeiträume sind 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate und 1 Jahr. | 
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | - |  
| Velocity | - |  
| Bemerkungen | - |  

----------

| Name | Sensor Detail Pages - Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich durch Knopfdruck auf eine Detailseite des zum Knopf zugehörigen Graphen gelangen. | 
| Akzeptanzkriterium | Für jeden Graphen existiert eine entsprechende Detailseite. Außerdem ist unter jedem Graphen im Dashboard ein Button, der beim Anklicken per React-Router auf die richtige Detailseite verlinkt. |  
| Geschätzter Aufwand | 0.5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | am 05.12.2016 |  
| Tatsächlicher Aufwand | 0.5 Stunden |  
| Velocity | 0.5/0.5 = 1 |  
| Bemerkungen | - |  

----------

| Name | Sensor Detail Pages - Graphanzeige |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf den einzelnen Detailseiten den entsprechenden Graphen angezeigt bekommen. |  
| Akzeptanzkriterium | Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend. |  
| Geschätzter Aufwand | 5 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | am 05.12.2016 |  
| Tatsächlicher Aufwand | 9 Stunden |  
| Velocity | 9/5 = 1.8 |  
| Bemerkungen | - |  

----------

| Name | Sensor Detail Pages - Zeiteinschränkung (DB-Anbindung) |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich auf den Detailseiten die Zeiträume der Graphen beschränken können. |  
| Akzeptanzkriterium | Auf jeder Detailseite befindet sich ein Dropdown-Menü, in dem ich folgende Auswahlmöglichkeiten für die zeitliche Begrenzung des Graphen habe: 1 Woche, 2 Wochen, 1 Monat, 3 Monate, 6 Monate, 1 Jahr. Beim Druck auf eine der Begrenzungen verändert sich der Graph auf der Detailseite entsprechend und die Werte werden korrekt aus der Datenbank gelesen und angezeigt. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Dominik Schuster, Simon Schmidt |  
| Umgesetzt | - |  
| Tatsächlicher Aufwand | - |  
| Velocity | - |  
| Bemerkungen | - |   

----------

| Name | Setup Initial Routing |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer der Webapp möchte ich von der Homepage zum Dashboard gelangen können. |  
| Akzeptanzkriterium | Im Menü gibt es einen Button mit Beschriftung "Dashboard". Beim Anklicken des Buttons werde ich mittels React-Router zur korrekten Seite gebracht. |  
| Geschätzter Aufwand | 2 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | am 25.11.2016 |  
| Tatsächlicher Aufwand | 4 Stunden |  
| Velocity | 4/2 = 2 |  
| Bemerkungen | - |  

----------

| Name | Dashboard |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich nach dem Einloggen mein Dashboard angezeigt bekommen. Im Dashboard möchte ich die Sensordaten der letzten zwei Wochen sehen können. |  
| Akzeptanzkriterium | Im Dashboard werden alle Graphen als Liniendiagramme angezeigt. Auf der x-Achse befindet sich die Zeit, also die letzten zwei Wochen und auf der y-Achse passende Werte und Skalierungen, je nach Sensor. Die Graphen zeigen korrekte Daten an. |  
| Geschätzter Aufwand | 1 Story Point |  
| Entwickler | Kay Wallaschek |  
| Umgesetzt | am 05.12.2016 |  
| Tatsächlicher Aufwand | 1.5 Stunden |  
| Velocity | 1.5/1 = 1.5 |  
| Bemerkungen | - |  

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

----------

| Name | Login - korrekte Funktionalität |  
| -------------- | --------------- |  
| Beschreibung | Als Benutzer möchte ich mich nur mit meinen Daten einloggen können. Beim Ausloggen werde ich auf die Startseite geschickt und ich kann nicht in einem zweiten Browser oder einem zweiten Browsertab weiterhin eingelogt auf der Seite bleiben. |  
| Akzeptanzkriterium | Beim Login werden nur korrekte Daten akzeptiert. Bei einer fehlerhaften Eingabe wird dies dem Benutzer per Textmeldung mitgeteilt. Nach dem Ausloggen kommt der Benutzer mittels React-Router auf die Startseite und hat auch nicht die Möglichkeit mittels zweitem Browser oder zweitem Browsertab weiterhin auf der Seite eingelogt zu bleiben. |  
| Geschätzter Aufwand | 4 Story Points |  
| Entwickler | Anja Kirchhöfer, Kay Wallaschek |  
| Umgesetzt | 17.12.2016 |  
| Tatsächlicher Aufwand | bisher 8 Stunden |  
| Velocity | - |  
| Bemerkungen | - |  

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
| Bemerkungen | - |  

----------

Last Edited: 12/29/2016 11:37 AM 