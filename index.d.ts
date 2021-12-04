import { DefinePlugin } from 'webpack';

export default GoogleSheetToJsonPlugin;

declare class GoogleSheetToJsonPlugin extends DefinePlugin {
    constructor(options: GoogleSheetToJsonPlugin.Options);
}

declare namespace GoogleSheetToJsonPlugin {
    interface Options {
        isDev?: boolean;
        output: string;
        spreadsheetId: string;
        apiKey: string;
    }
}
