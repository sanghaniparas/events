# Project Overview

This project contains an events component which is used to display an Upcoming event list. Also, users can check the details of that event by clicking on the event title. This is a database driven so users can easily manage from the database.

# Event

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

# Technologies

SharePoint Online, Angular, PnP, Bootstrap

# Prerequisites in Local Machine

- NodeJS >= 14.17.5 (https://nodejs.org/en/download/releases/)
- Angular >= 12 (https://angular.io/guide/setup-local)
- Git >= 2 (https://git-scm.com/download/win)

# List
- Create List in sharepoint-> Events 
    Title=>Single Line Text;
    EventDate=>Date;
    EventDescription=>Single Line Text;

# List Name
- Create Constant.ts file in app. All List Name will be contain in this file.  

# Install Packages

- Install dependancy of pnpjs `npm i @pnp/pnpjs` and put bootstrap cdk in index.html


## Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Upload in SharePoint

After build need to open the create folder with component name under Site Assets in the SharePoint environment and upload all files which created in the dist directory. Change the path of all files as per SharePoint folder structure in the index.html

## Create Page
- Create one page and load index.html file under that page.

