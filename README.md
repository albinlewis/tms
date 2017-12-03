# TMS - Task Management System

## Projekt-Vision
Unser Ziel ist es eine bequem nutzbare, praktische und optisch ansprechende Time-Tracking und Task-Management App für den Einsatz im Alltag zu entwicklen. 

## Setup
Um das Projekt auszuführen werden NodeJS, Electron und die Angular CLI benötigt. 

```shell
> npm install @angular/cli -g
> npm install electron -g
```

Nach der Installation sind folgende commands im Terminal möglich: 

|Command|Action|Info|
|-------|------|----|
|npm run dev-frontend|runs the angular app in dev mode|on localhost:4200 (hot-reload) [development-mode]|
|npm run dev-backend|runs the node backend in dev mode|(restarts on changes - powered by nodemon)|
|npm start|builds and runs the electron app|production mode|
|npm test|runs the Karma test-suite|frontend tests|
|npm run mocha|runs the Mocha-Chai test-suite|backend tests|
|~~npm run e2e~~|~~runs end-to-end tests~~|currently not used|

#### development-mode

```shell
> npm run dev-backend
> npm run dev-frontend
```

Trennt Frontend und Backend in eigene Prozesse, und ermöglicht development mit hot-reload im Frontend und restart-on-change im Backend. 
Backend code der den Server, und nicht seine API betrifft (Änderungen in server.js müssen für electron-build in main.js umgezogen werden). 


## Tests

#### Backend Tests

Die beiliegende Mocha Test-Suite kann mit dem command 

```shell
> npm run mocha
```

ausgeführt werden. 
Sie umfasst das Erstellen, Anzeigen, Modifizieren und Löschen von Tasks.

#### Frontend Tests

Die beiliegende Karma Test-Suite kann mit dem command

```shell
> npm test
```

ausgeführt werden. 
Aktuell umfasst diese nur die vordefinierten Standard-Tests.
-> TODO

## Verwendete Frameworks
![alt text](https://cdn.auth0.com/blog/angular2-electron/angular2-electron-logo.png "Angular + Electron")
![alt text](https://raw.githubusercontent.com/daton89-topperblues/mongoose-transactions/master/docs/img/mongoose-transactions.png "Node Express Mongoose")
<br>Wir haben uns für eine Kombination von Angular und Electron entschieden, 
um das Projekt als Desktop Anwendung zu realisieren. Unser Backend umfasst eine
Node Express REST-API, welche mittels des packages mongoose auf eine mongoDB zugreift. 

## Frontend
// TODO

## Backend
// TODO [API-documentation guideline](https://gist.github.com/iros/3426278)

## License
// TODO

# Team / Organisation

## Contributors
|Name|Matr.-Nr.|
|----|---------|
|Armstrong-Arndt, Jamie John|747594| 
|Belling, Maximilian|748078|
|Stümpfl, Maximilian|740147| 

## Organisation
- wöchentliche Sprints (Retrospektive + neue Planung Mittwochs in der Veranstaltung)
- VoIP-Meetings und Screen-Casts mittels Discord + Blizz
- Sonstige Projekt Kommunikation per WA-Gruppe
- Repository auf GitLab, Branch-Management nach [GitHub-flow](https://guides.github.com/introduction/flow/)

## Verlauf der Entwicklung
- 30.11.17 Sprint-Planning + Beginn der Backend-Entwicklung, Initiale Dokumentation
- 02/03.12.17 Abschluss der Backend-Entwicklung für Sprint 1, Paper-Prototyping, Beginn der Frontend-Entwicklung, Dokumentation
