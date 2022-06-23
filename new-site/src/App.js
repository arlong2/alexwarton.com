import './App.css';
import kw_logo from './images/KW_ICON.png'
import alex_1 from './images/DSC_3194.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={alex_1} className="alex-photo-one" alt="Alex Warton" />
        <p>
          Alex Warton is a musician and engineer based in San Diego, CA. She currently sings and plays lead guitar in King Whisker
        </p>
        <button onClick="kingwhisker.com">
          <img src={kw_logo} className="kw-logo" alt="kw-logo" />
        </button>
      </header>
    </div>
  );
}

export default App;
