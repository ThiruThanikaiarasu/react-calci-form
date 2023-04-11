import { BrowserRouter as Router, Route,Routes,Link } from 'react-router-dom';
import './App.css';
import CalculatorComponent from './components/router/CalculatorComponent/CalculatorComponent';
import PortfolioComponent from './components/router/PortfolioComponent/PortfolioComponent';
import RickAndMortyAPIComponent from './components/router/RickAndMortyAPIComponent/RickAndMortyAPIComponent';

function App() {
  return (
    <Router>
      <div
        className='h-[100px]'
      >
        <ul
          className='flex justify-center align-center p-0 bg-slate-500 h-full'
        >
          <li
            className='px-5 py-2 text-2xl hover:decoration-solid flex '
          >
              <Link to='/' className='hover:underline mt-[20px]'>Portfolio</Link>
            </li>
            <li
              className='px-5 py-2 text-2xl hov
er:decoration-solid flex '
            >
              <Link to='/calculator' className='hover:underline mt-[20px]'>Calculator</Link>
            </li>
            <li
              className='px-5 py-2 text-2xl hov
er:decoration-solid flex '
            >
              <Link to='/rickandmorty' className='hover:underline mt-[20px]'>Rick And Morty</Link>
            </li >
        </ul>
        
      </div>
      <Routes>
        <Route exact path='/' element={<PortfolioComponent/>}></Route>
        <Route exact path='/calculator' element={<CalculatorComponent/>}></Route>
        <Route exact path='/rickandmorty' element={<RickAndMortyAPIComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
