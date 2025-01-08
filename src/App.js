import logo from './logo.svg';
import './App.css';
import Header from './shared/components/header';
import './scss/main.scss';
import Herobanner from './routs/home/herobanner';
import Home from './routs/home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
