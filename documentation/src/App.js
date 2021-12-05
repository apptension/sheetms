import './App.css';
import {Header} from './sections/Header'
import {Section} from './sections/Section'
import { FormattedMessage } from 'react-intl';
import img1 from './images/1.png'
import img2 from './images/2.png'
import warnignImg from './images/warning.svg'
import {ContributorsSection} from './sections/ContributorsSection'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section title={<FormattedMessage id="howItWorks.title" defaultMessage="How it works?" />} imgSrc={img1} sectionTitle={'Create a Google Spreadsheet'}>
        <p>'Create a Google Spreadsheet and fill it with wanted data. In "A" column place keys and in the "B" column type the relevant translation.'</p>
      </Section>
      <div className="container">
        <div className="warning"><img src={warnignImg}/>Remeber to place the keys in A column and translations in the B column</div>
      </div>
      <Section title={undefined} imgSrc={img2} sectionTitle={'Name the spreadsheet'}>
      <p>Name the spreadsheets as languages name provided by browser namespace.</p>
      <p className="m-0">Example languages</p>
      <ul>
        <li><span className="snippet">en</span> for English</li>
        <li><span className="snippet">en-GB</span> for English spoken in United Kingdom</li>
        <li><span className="snippet">fr-FR</span> for French spoken in France</li>
      </ul>
      <p> List you can find here: <a href="http://www.lingoes.net/en/translator/langcode.htm" target="_blank" rel="noreferrer">browser languages list</a></p>
      </Section>


      <div className="container">

          <pre className="codesnippet__pre">
            <code className="codesnippet__code">
              <div>npm i @cpburn/sheetms</div>
            </code>
          </pre>

          <h3>Install package in your project</h3>
          <p>Run yarn add or npm install command in order to add the package to your project</p>

          <pre className="codesnippet__pre">
          <code className="codesnippet__code">
            <div className="comment">//Add this config in your plugins in webpack.config.js</div>
            <div>new GoogleSheetToJson({`{`} </div>
            <div className="space">spreadsheetId:<span className="string"> 'mySecretSpreadsheetId'</span>,</div>
            <div className="space">output:  path.join(__dirname, <span className="string">'yourTranslations.json'</span>),</div>
            <div className="space">apiKey: yourApiKey,</div>
            <div className="space">forceCreate: isEnvDevelopment</div>
            <div>{`}`})</div>
          </code>
          </pre>

          <h3>Configure</h3>
          <p>Create a configuration of the plugin in <span className="strong">webpack.config.js</span></p>

          <ul>
            <li><span className="snippet">spreadsheetId</span><span className="string">: string</span> - The Google Spreadsheet id</li>
            <li><span className="snippet">output</span><span className="string">: string</span> - The absolute path to create the JSONs</li>
            <li><span className="snippet">apiKey</span><span className="string">: string</span> - Your Google App api key. <a href="https://developers.google.com/workspace/guides/create-project" target="_blank" rel="noreferrer" >Click here to learn how to create one.</a></li>
            <li><span className="snippet">forceCreate</span><span className="string">: string</span> : boolean - Forces the creation of all translation files. Useful when cold starting a project, and usually is set to true during development. Defaults to <span className="string">false.</span></li>
          </ul>

          <pre className="codesnippet__pre">
          <code className="codesnippet__code">
            <div className="comment">//This is an example output in .json file</div>
            <div>{`{`}</div>
            <div className="space">"pt-BR": </div>
            <div className="space-md">{`{`}</div>
            <div className="space-lg">"title":"Título em Potuguês"</div>
            <div className="space-md">{`}`}</div>
            <div className="space">"en-GB": </div>
            <div className="space-md">{`{`}</div>
            <div className="space-lg">"title":"Title in English"</div>
            <div className="space-md">{`}`}</div>
            <div className="space">"pl-PL": </div>
            <div className="space-md">{`{`}</div>
            <div className="space-lg">"title":"Tytuł po polsku"</div>
            <div className="space-md">{`}`}</div>
            <div>{`}`}</div>
          </code>
          </pre>

          <h3>Get your content!</h3>
          <p>Use content generated in<span className="strong">.json</span> files!</p>


        <ContributorsSection/>

      </div>
    </div>

  );
}

export default App;
