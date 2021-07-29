import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ClientApp from './ClientApp';
import WalkerApp from './WalkerApp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/client-app" component={ClientApp}/>
          <Route path="/walker-app" component={WalkerApp}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
