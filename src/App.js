import logo from './logo.svg';
import './App.css';
import QuoteBlock from './components/quoteBlock';

function App() {
  return (
    <div className="App">
      <QuoteBlock
        quoteText={"ONLYOFFICE Personal is an online editor that packs the necessary tools to create Microsoft compatible documents, spreadsheets, and presentations, and collaboratively work in real time."}
        quoteHref={"https://webapps.softpedia.com/app/OnlyOffice-Personal/"}
        quoteLinkText={"Softpedia"}
        quoteImageUrl={"../images/softpedia.svg"}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
