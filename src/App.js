import './App.css';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import History from './components/History';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <History />
      <Gallery />
    </div>
  );
}

export default App;
