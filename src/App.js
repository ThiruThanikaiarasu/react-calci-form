import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import './App.css';
import CalculatorComponent from './components/router/CalculatorComponent/CalculatorComponent';
import PortfolioComponent from './components/router/PortfolioComponent/PortfolioComponent';
import RickAndMortyAPIComponent from './components/router/RickAndMortyAPIComponent/RickAndMortyAPIComponent';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to='/portfolio'>Portfolio</Link>
        </ul>
        <ul>
          <Link to='/calculator'>Calculator</Link>
        </ul>
        <ul>
          <Link to='/rickandmorty'>Rick And Morty</Link>
        </ul>
      </div>
      <Routes>
        <Route exact path='/portfolio' element={<PortfolioComponent/>}></Route>
        <Route exact path='/calculator' element={<CalculatorComponent/>}></Route>
        <Route exact path='/rickandmorty' element={<RickAndMortyAPIComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
