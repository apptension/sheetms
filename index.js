const google = require('googleapis');
const fs = require('fs');
const path = require('path');

class GoogleSheetToJsonPlugin {
  constructor(options) {
    this.options = options;
    if (this.options?.forceCreate) {
        this.fetchGoogleSheet();
    }
  }

  fetchGoogleSheet(cb) {
      const { output, spreadsheetId, apiKey } = this.options
      const sheets = new google.sheets_v4.Sheets({ auth: apiKey });

      sheets.spreadsheets.get({
          spreadsheetId
      }).then(function(response) {
          const ranges = response.data.sheets.map(({properties}) => properties.title)

          sheets.spreadsheets.values.batchGet({
              spreadsheetId,
              ranges: ranges.map(range => `${range}!A:B`),
          }).then(({data}) => {
              const formatted = data.valueRanges.reduce((previous,{range, values}) => ({
                  [range.replace(/'/g, "").split("!")[0]]: values?.reduce((acc, [key, value]) => ({[key]: value, ...acc}), {}),
                  ...previous
              }), {})

              if (!fs.existsSync(output)){
                  fs.mkdirSync(output);
              }

              ranges.map((sheet) => fs.writeFileSync(path.join(output, sheet + '.json'), JSON.stringify(formatted[sheet])));
              return cb ? cb() : null
          }).catch((error) => {
              console.log(error);
              return cb ? cb() : null;
          });
      }, function(response) {
          console.log('Error: ' + response.result.error.message);
      });
  }
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync(
      "GoogleSheetToJsonPlugin",
      (compilation, callback) => {
          this.fetchGoogleSheet(callback);
        })

  }
}

module.exports = GoogleSheetToJsonPlugin;
