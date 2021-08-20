import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './components/home-page/home-page.jsx';
import BookCard from "./components/card/Cards.jsx";
import Page3 from './components/page3/Page3';
import OrderPlaced from './components/orderPlaced/OrderPlaced';
import LoginPage from './components/loginPage/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/homepage" component={HomePage}>
            </Route>
          <Route exact path="/bookcard" component={BookCard}>
            </Route>
          <Route exact path='/page3' component={Page3}>
            </Route>
          <Route exact path="/orderplaced" component={OrderPlaced}>
            </Route>
          <Route exact Path ='/loginpage'>
              <LoginPage />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
