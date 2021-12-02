import './App.css';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Navbar />
    <div>
    <CountriesList  />
    </div>
    <Routes>
    <Route path="/countries/:cca3" element={<CountryDetails/>} />
      </Routes>
      
    </div>
  );
}

export default App;
