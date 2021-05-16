import './App.css';
import Navbar from './components/Navbar';
import DateSearch from './components/DateSearch';
import AsteroidDetails from './components/AsteroidDetails';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <DateSearch />
          <AsteroidDetails />
          
        </div>
      </div>
    </div>
  );
}

export default App;
