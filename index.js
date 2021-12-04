const google = require('googleapis');

// A JavaScript class.
class GoogleSheetToJsonPlugin {
  constructor(options) {
    this.options = options;
  }
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    console.log("compiler");
    compiler.hooks.emit.tapAsync(
      "GoogleSheetToJsonPlugin",
      (compilation, callback) => {
          // console.log(google);
        const sheets = new google.sheets_v4.Sheets({ auth: { apiKey: '' } });
        console.log(sheets);
        sheets.spreadsheets.values.get({
            spreadsheetId: this.options.spreadsheetId,
            range: this.options.range,
        }).then((data) => {
            console.log(data);
            console.log('works?');
            callback();
        }).catch((error) => {
            console.log(error);
            return callback();
        });

      }
    );
  }
}

module.exports = GoogleSheetToJsonPlugin;
