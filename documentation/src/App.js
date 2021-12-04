import './App.css';
import {Header} from './sections/Header'
import {Section} from './sections/Section'
import { FormattedMessage } from 'react-intl';
import img1 from './images/1.png'
import img2 from './images/2.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section title={<FormattedMessage id="howItWorks.title" defaultMessage="How it works?" />} imgSrc={img1} imgTitle={'Create a Google Spreadsheet'} description={'Create a Google Spreadsheet and fill it with wanted data. In "A" column place keys and in the "B" column type the relevant translation.'}/>
      <div className="warning"><span className="important">!</span>Remeber to <span className="strongWarning">place the keys in <span className="veryStrongWarning">A</span>column and <span className="strongWarning">translations in the <span className="veryStrongWarning">B</span> column</span> </span></div>
      <Section title={undefined} imgSrc={img2} imgTitle={'Name the spreadsheets'} description={'You can name the spreadsheet'}/>
      <pre className="codesnippet__pre">
      <code className="codesnippet__code">
        <div className="comment">//Add this config in your plugins in webpack.config.js</div>
        <div>new GoogleSheetToJson({`{`} </div>
        <div className="space">spreadsheetId:<span className="string"> 'mySecretSpreadsheetId'</span>,</div>
        <div className="space">output:  path.join(__dirname, <span className="string">'yourTranslations.json'</span>),</div>
        <div className="space">apiKey: yourApiKey,</div>
        <div className="space">isDev: isEnvDevelopment</div>
        <div>{`}`})</div>
      </code>
      </pre>
    </div>

  );
}

export default App;
