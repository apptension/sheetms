# SheeTMS - Webpack Plugin

Because managing translations & copy files can be a nightmare, and the available translations services are expensive,
requires a learning process and is difficult to maintain. Spreadsheets are 
widely known and a "must have" tool for any organization. Using spreadsheets to keep
your copy and translations is not only free, easy to use and cool, is the Sheet! 💩

## How does it work?

In build time, the plugin fetches all tabs from your Google Spreadsheet and converts the first and second
columns to JSON files, where the name of the tab becomes the file name. 

That way, you can simply name your tabs as the standard Intl languages (e.g. `en`, `en-GB`, `pl-PL`, etc..) 
and you have all your translations files ready to use!

## Installation

`npm i @cpburn/google-sheets-to-json` 🎉

## Configuration
```
//Add this config in your plugins in webpack.config.js

new GoogleSheetToJson({ 
    spreadsheetId: 'mySecretSpreadsheetId',
    output:  path.join(__dirname, '../src/translations/'),
    apiKey: yourApiKey,
    forceCreate: isEnvDevelopment
})
```

`spreadsheetId`: string - The Google Spreadsheet id

`output`: string - The absolute path to create the JSONs

`apiKey`: string - Your Google App api key. [Click here to learn how to create one.](https://developers.google.com/workspace/guides/create-project)

`forceCreate`: boolean - Forces the creation of all translation files. Useful when cold starting a project, and usually
is set to true during development. Defaults to `false`.