// A JavaScript class.
class GoogleSheetToJsonPlugin {
  constructor(options) {
    console.log(options);
  }
  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    console.log("compiler");
    compiler.hooks.emit.tapAsync(
      "GoogleSheetToJsonPlugin",
      (compilation, callback) => {
        console.log("This is an example plugin!");
        console.log("Here’s the `compilation` object which represents a single build of assets:");
        callback();
      }
    );
  }
}

module.exports = GoogleSheetToJsonPlugin;
