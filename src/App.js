import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import History from './components/History';
import Gallery from './components/Gallery';
import GreatBuilder from './components/GreatBuilder/GreatBuilder';
import HigherImageContainer from './components/HigherImageContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <History />
      <Gallery />
      <GreatBuilder />
      <HigherImageContainer />
    </div>
  );
}

export default App;
