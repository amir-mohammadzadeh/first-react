
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'
import Main from './components/Main/Main';

function App() {
  return (
    [
      <Navigation  /> ,
      <Header  />,
      <Main  />
    ]
  );
}

export default App;
