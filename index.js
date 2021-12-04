const google = require('googleapis');
const fs = require('fs');

// A JavaScript class.
class GoogleSheetToJsonPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tapAsync(
      "GoogleSheetToJsonPlugin",
      (compilation, callback) => {
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