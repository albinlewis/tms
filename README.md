# TMS - Task Management System
(Demo der App unter https://trackingappli.herokuapp.com/)

## Projekt-Vision

Unser Ziel ist es eine bequem nutzbare, praktische und optisch ansprechende Time-Tracking und Task-Management App für den Einsatz im Alltag zu entwicklen. 

## Setup

Um das Projekt auszuführen werden NodeJS, die Projekt-dependencies, (Electron) und die Angular CLI benötigt.
**Anmerkung:** Electron ist nur eine der Möglichkeiten die App zu nutzen, und die Installation von Electron somit optional.

```shell
> npm install @angular/cli -g
> npm install electron -g
> npm install
```

### Verwendung der App

Um die App zu nutzen empfehlen wir anschließend die App zu builden, und das Setup auszuführen, um sie dann entweder mit electron oder im Browser zu starten.
Das Starten an sich übernimmt dabei der Setup-Prozess (welcher durch npm start initiiert wird).
Die hierzu benötigten Befehle sind:

```shell
> npm run build
> npm start
```

### Entwickler-Info

Nach der Installation sind folgende commands im Terminal verfügbar:

|Command|Action|Info|
|---|---|---|
|npm start|starts the app with a little setup|perform AFTER build|
|npm run build|builds the app for either platform|production-mode|
|npm run electron|runs the latest local build with electron|production-mode|
|npm run browser|runs the latest local build in the browser|production-mode|
|npm run browser-build|builds and runs the app in the browser|production-mode|
|npm run electron-build|builds and runs the app in electron|production-mode|
|npm run dev|runs the app in development mode with hot-reload|dev-mode of the complete app|
|npm run dev-frontend|runs the frontend in development mode with hot-reload|dev-mode of frontend|
|npm run dev-backend|runs the backend in development mode with hot-reload|dev-mode of backend|
|npm run mocha|runs the mocha-chai test-suite|backend tests|
|~~npm run karma~~|runs karma test suite|currently not available|
|~~npm run e2e~~|runs e2e test suite|currently not available|

#### development-mode

Die komplette app kann mit dem Befehl `npm run dev` im development mode ausgeführt werden.
Die einzelnen Befehle `npm run dev-frontend` und `npm run dev-backend` trennen Frontend und Backend in eigene Prozesse.

#### production-mode

Um die App zu nutzen muss sie erst gebuildet werden.
Dies kann über `npm run build` oder `ng build --prod` getan werden.
Nach dem erfolgreichen builden der App kann sie mit electron oder lokal im browser gestartet werden.
Hierfür können die Befehle `npm run electron` oder `npm run browser` genutzt werden.
Des Weiteren kann der Build und Start der App auch in einem Befehl erfolgen; durch `npm run electron-build` oder `npm run browser-build`.

## Tests

### Backend Tests

Die beiliegende Mocha Test-Suite kann mit dem command

```shell
> npm run mocha
```

ausgeführt werden.
Sie umfasst das Erstellen, Anzeigen, Modifizieren und Löschen von Tasks.

### Frontend Tests

Aktuell nicht verfügbar.

### E2E Tests

Aktuell nicht verfügbar.

## Verwendete Frameworks

![alt text](https://cdn.auth0.com/blog/angular2-electron/angular2-electron-logo.png "Angular + Electron")

Wir haben uns zu Beginn des Projektes für eine Kombination von Angular und Electron entschieden, um das Projekt als Desktop Anwendung zu realisieren.
Unser Backend umfasst eine Node Express REST-API, welche mittels des packages mongoose auf eine mongoDB zugreift.

Im Laufe des Projektes fanden wir mehr Gefallen daran, die App lokal über einen Node Prozess zu hosten, und im Browser zu verwenden.
Dies hat sich auch in unseren Praxistests als komfortabler erwiesen, und ist daher die empfohlene Nutzungsweise.

## Frontend

Die Electron App gliedert sich in vier verschiedene Views:

- Task-Management-View
  - Hier werden Tasks erstellt, und in 4 wählbaren Kategorien angezeigt.
  - Außerdem können Tasks hier wieder auf 'ToDo' gesetzt, und die getrackte Zeit bei Bedarf zurückgesetzt werden (Dies bietet sich für tägliche bzw. wiederkehrende Tasks an)
  - Auch alle anderen sinnvollen Änderungen an Tasks können hier vorgenommen werden.

![Task-Management-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-01.PNG)

- Tracking-View
  - Hier können die offenen Tasks angeklickt, und so getrackt werden.
  - Während die Zeit genommen wird können hier für jede Task Notizen gemacht werden.
  - Außerdem können Tasks hier auf bearbeitet gesetzt werden.

![Tracking-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-02.PNG)

- Statistics-View
  - In dieser View wird die bisher auf Tasks verwendete Zeit statistisch angezeigt.
  - Es kann zwischen einer relativen (Tortendiagramm der verwendeten Zeit pro Tasks), absoluten (alle Tasks und ihre Zeite werden in einem Balkendiagramm aufgelistet), und einer Listen-Ansicht (Timetracking Liste, welche Task, Zeit und Status listet) gewählt werden.

![Statistics-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-03.PNG)

- Export-View
  - In dieser View kann die komplette Task Liste exportiert werden. 
  - Es wird dabei entweder die Verarbeitung zu einem von drei verschiedenen Dokumenten, und anschließender Versand dieser als E-Mail, oder der Download der Rohdaten als CSV oder JSON Datei angeboten.
  - Die Dokumente und ihr Zweck:
    - Daily Journal: Eine kurze Liste an bearbeiteten Tasks und den gemachten Notizen, für eine schnelle Übersicht in Daily-Meetings (Gedächtnisstütze)
    - ToDo-List: Eine bündige Übersicht der offenen Tasks
    - Timetracking-Table: Eine Listenansicht, wie im Statistics-View

![Export-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-04.PNG)

## Backend



## License

`// TODO`

## Team / Organisation

### Contributors

|Name|
|----|
|Armstrong-Arndt, Jamie John|747594|
|Belling, Maximilian|748078|
|Kouatcho, Albin|743685|
|Stümpfl, Maximilian|740147|

### Organisation

- wöchentliche Sprints (Retrospektive + neue Planung Mittwochs in der Veranstaltung)
- VoIP-Meetings und Screen-Casts mittels Discord + Blizz
- Sonstige Projekt Kommunikation per WhatsApp-Gruppe
- Repository auf Github, Branch-Management nach [GitHub-flow](https://guides.github.com/introduction/flow/)
