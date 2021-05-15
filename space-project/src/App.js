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
          <div className="row">
            <div className="col-md-2"><Searchbar placeholder="start MM/DD/YYYY"/></div>
            <div className="col-md-2"><Searchbar placeholder="end MM/DD/YYYY" /></div>
            <div className="col-md-auto"><button type="button" class="btn btn-light"><i class="fas fa-search"></i></button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
