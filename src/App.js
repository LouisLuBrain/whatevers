import './App.css';
import './tailwindcss/tailwind.css';
import routes from './routes';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './pages/Navigation';
import HelloPage from './pages/HelloPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex">
          <Navigation />
          <div className="flex-grow">
            <Switch>
              <Route exact path="/"><HelloPage/></Route>
              {routes.map(route => (<Route path={route.path}>{route.children}</Route>))}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
