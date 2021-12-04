const google = require('googleapis');
const fs = require('fs');

class GoogleSheetToJsonPlugin {
  constructor(options) {
    this.options = options;
    if (this.options.isDev) {
        this.fetchGoogleSheet();
    }
  }

  fetchGoogleSheet(cb) {
      const sheets = new google.sheets_v4.Sheets({ auth: this.options.apiKey });

      sheets.spreadsheets.values.batchGet({
          spreadsheetId: this.options.spreadsheetId,
          ranges: this.options.range,
      }).then(({data}) => {
          const formatted = data.valueRanges.reduce((previous,{range, values}) => ({
              [range.replace(/'/g, "").split("!")[0]]: values?.reduce((acc, [key, value]) => ({[key]: value, ...acc}), {}),
              ...previous
          }), {})

          fs.writeFileSync(this.options.output, JSON.stringify(formatted));
          return cb ? cb() : null
    }).catch((error) => {
          console.log(error);
          return cb ? cb() : null;
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
