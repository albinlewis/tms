# TMS - Task Management System

## Projekt-Vision

Unser Ziel ist es eine bequem nutzbare, praktische und optisch ansprechende Time-Tracking und Task-Management App für den Einsatz im Alltag zu entwicklen. 

## Setup

Um das Projekt auszuführen werden NodeJS, die Projekt-dependencies, Electron und die Angular CLI benötigt.

```shell
> npm install @angular/cli -g
> npm install electron -g
> npm install
```

Nach der Installation sind folgende commands im Terminal möglich: 

|Command|Action|Info|
|-------|------|----|
|npm run dev-frontend|runs the angular app in dev mode|on localhost:4200 (hot-reload) [development-mode]|
|npm run dev-backend|runs the node backend in dev mode|(restarts on changes - powered by nodemon)|
|npm run dev|runs the whole app locally in development mode|combination of decoupled commands|
|npm run mocha|runs the Mocha-Chai test-suite|backend tests|
|npm start|builds and runs the electron app|production mode|
|~~npm test~~|~~runs the Karma test-suite~~|currently not used|
|~~npm run e2e~~|~~runs end-to-end tests~~|currently not used|

### development-mode

```shell
> npm run dev-backend
> npm run dev-frontend
```

Trennt Frontend und Backend in eigene Prozesse, und ermöglicht development mit hot-reload im Frontend und restart-on-change im Backend. 

### production-mode

```shell
> npm start
```

Startet den Build-Prozess der Angular App, und startet diese anschließend mit Electron. Hierbei wird eine Instanz des REST-Servers innerhalb des Electron Prozesses gestartet, um alle Funktionalitäten der App in einem Prozess zu bündeln. 

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

## Verwendete Frameworks

![alt text](https://cdn.auth0.com/blog/angular2-electron/angular2-electron-logo.png "Angular + Electron")
Wir haben uns für eine Kombination von Angular und Electron entschieden,
um das Projekt als Desktop Anwendung zu realisieren. Unser Backend umfasst eine
Node Express REST-API, welche mittels des packages mongoose auf eine mongoDB zugreift.

## Frontend

Die Electron App gliedert sich in vier verschiedene Views: 

- Task-Management-View
  - Hier werden Tasks erstellt, und in 4 wählbaren Kategorien angezeigt. 
  - Außerdem können Tasks hier wieder auf 'ToDo' gesetzt, und die getrackte Zeit bei Bedarf zurückgesetzt werden (Dies bietet sich für tägliche bzw. wiederkehrende Tasks an)
  - Auch alle anderen sinnvollen Änderungen an Tasks können hier vorgenommen werden.
![Task-Management-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-01.png)

- Tracking-View
  - Hier können die offenen Tasks angeklickt, und so getrackt werden. 
  - Während die Zeit genommen wird können hier für jede Task Notizen gemacht werden. 
  - Außerdem können Tasks hier auf bearbeitet gesetzt werden.
![Tracking-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-02.png)

- Statistics-View
  - In dieser View wird die bisher auf Tasks verwendete Zeit statistisch angezeigt.
  - Es kann zwischen einer relativen (Tortendiagramm der verwendeten Zeit pro Tasks), absoluten (alle Tasks und ihre Zeite werden in einem Balkendiagramm aufgelistet), und einer Listen-Ansicht (Timetracking Liste, welche Task, Zeit und Status listet) gewählt werden.
![Statistics-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-03.png)

- Export-View
  - In dieser View kann die komplette Task Liste exportiert werden. 
  - Es wird dabei entweder die Verarbeitung zu einem von drei verschiedenen Dokumenten, und anschließender Versand dieser als E-Mail, oder der Download der Rohdaten als CSV oder JSON Datei angeboten.
  - Die Dokumente und ihr Zweck:
    - Daily Journal: Eine kurze Liste an bearbeiteten Tasks und den gemachten Notizen, für eine schnelle Übersicht in Daily-Meetings (Gedächtnisstütze)
    - ToDo-List: Eine bündige Übersicht der offenen Tasks
    - Timetracking-Table: Eine Listenansicht, wie im Statistics-View
![Export-View](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/doc/app-screens/tms-04.png)

## Backend

Die Dokumentation der Task-API kann im repository unter [/src/api/readme.md](https://gitlab.fbi.h-da.de/istmabell/tms/blob/master/src/api/readme.md) eingesehen werden.
Sie wurde anhand dieses [Beispiels](https://gist.github.com/iros/3426278) erstellt.

## License

`// TODO`

## Team / Organisation

### Contributors

|Name|Matr.-Nr.|
|----|---------|
|Armstrong-Arndt, Jamie John|747594|
|Belling, Maximilian|748078|
|Stümpfl, Maximilian|740147|
|.. , Albin|..|

### Organisation

- wöchentliche Sprints (Retrospektive + neue Planung Mittwochs in der Veranstaltung)
- VoIP-Meetings und Screen-Casts mittels Discord + Blizz
- Sonstige Projekt Kommunikation per WhatsApp-Gruppe
- Repository auf GitLab, Branch-Management nach [GitHub-flow](https://guides.github.com/introduction/flow/)
