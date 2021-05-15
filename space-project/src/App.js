import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-border">
          <Navbar />
          <p>Search for Asteroids based on their closest approach date to Earth: </p>
          <Searchbar placeholder="start MM/DD/YYYY"/>
          <Searchbar placeholder="end MM/DD/YYYY" />
        </div>
          
      </div>
    </div>
  );
}

export default App;
