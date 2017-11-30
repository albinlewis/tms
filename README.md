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
|npm run dev|installs node dependencies and runs the app in dev mode|app on localhost:4200 (hot-reload) [development-mode]|
|npm start|builds and runs the electron app|production mode|
|npm test|runs the Karma test-suite|frontend tests|
|npm run mocha|runs the Mocha-Chai test-suite|backend tests|
|~~npm run e2e~~|~~runs end-to-end tests~~|currently not used|

#### development-mode
- hot-reload aus praktischen Gründen für das Entwicklen der app
- benutzt die test environment (inkl. test datenbank)

#### production-mode
- electron wrappt die gebaute app, mLab token in Sprint 1 hardcoded, später vom Nutzer einzutragen

## Verwendete Frameworks
// TODO

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
