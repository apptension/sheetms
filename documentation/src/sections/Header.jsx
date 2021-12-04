
import { FormattedMessage } from 'react-intl';
import {Button} from '../components/Button'
import logo from '../logo.svg';

const Header = () => (
    <header className="App-header">
        <h1> <FormattedMessage id="header.title" defaultMessage="Hello" /></h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><FormattedMessage id="header.description" defaultMessage="const GoogleSheetToJson = require('GoogleSheetToJson');" /></code>
        </p>
        <section className="buttons__container">
          <Button>Github</Button>
          <Button link="#getStarted">Get Started</Button>
        </section>
      </header>
)

export { Header }