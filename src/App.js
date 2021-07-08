import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import History from './components/History';
import Gallery from './components/Gallery';
import GreatBuilder from './components/GreatBuilder/GreatBuilder';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <History />
      <Gallery />
      <GreatBuilder />
    </div>
  );
}

export default App;
