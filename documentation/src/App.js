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
      <Section title={<FormattedMessage id="howItWorks.title" defaultMessage="How it works?" />} imgSrc={img1} imgTitle={'Create a Google Spreadsheet'} description={'Create a Google Spreadsheet and fill it with wanted data'}/>
      <Section title={undefined} imgSrc={img2} imgTitle={'Name the spreadsheet'} description={'You can name the spreadsheet'}/>
    </div>

  );
}

export default App;
