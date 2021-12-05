
import { FormattedMessage } from 'react-intl';
import {Button} from '../components/Button'
import logo from '../logo.svg';

const Header = () => (
    <header className="App-header">
      <div className="container">
          <h1> <FormattedMessage id="header.title" defaultMessage="Hello" /></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code><FormattedMessage id="header.description" defaultMessage="const GoogleSheetToJson = require('sheetms-webpack-plugin');" /></code>
          </p>
          <section className="buttons__container">
            <Button link="https://github.com/apptension/google-sheet-to-json" target="_blank">Github</Button>
            <Button link="#getStarted"><FormattedMessage id="button.start" defaultMessage="Get Started" /></Button>
          </section>
        </div>
      </header>
)

export { Header }