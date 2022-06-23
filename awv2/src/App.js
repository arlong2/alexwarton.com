import './App.css';
import kw_logo from './images/KW_ICON.png'
// import alex_1 from './images/DSC_3194.jpg'
// import { useState } from 'react';
//import ReactCSSTransitionGroup from 'react-transition-group';

function App() {
  
  // const [hideAbout, setHideAbout] = useState(true);
  // let photoName = "alex-photo-hidden";

  //   if(hideAbout === true) {
  //     photoName = "alex-photo-hidden";
  //   }
  //   else {
  //     photoName = 'alex-photo-one';
  //   }

  return (
    <div className="App">
      <header className="App-header"> 
        <a href="http://kingwhisker.com">
          <img src={kw_logo} className="kw-logo" alt="kw-logo" />
        </a>
        <a href="http://open.spotify.com/playlist/6HOT4Yrfmy01MCMpoalRd7" className="spot-link">Listen</a>
        {/*<div className="pop-ups">
          <button onClick={() => setHideAbout(!hideAbout)}>About Alex</button>
          <img src={alex_1} className={photoName} alt="Alex Warton" />
          <p className={photoName}>
            Alex Warton is a musician and engineer based in San Diego, CA. She currently sings and plays lead guitar in King Whisker
          </p>
          <a href="http://open.spotify.com/playlist/6HOT4Yrfmy01MCMpoalRd7" className="spot-link">Listen</a>
        </div>*/}
      </header>
      {/*<footer>
        <a>
        <img src=>
        </a>
      </footer>*/}
    </div>
  );
}

export default App;
