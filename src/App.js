import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from './components/home-page/home-page.jsx';
import BookCard from "./components/card/Cards.jsx";
import Page3 from './components/page3/Page3';
import OrderPlaced from './components/orderPlaced/OrderPlaced';
import LoginPage from './components/loginPage/LoginPage';
import NewUser from './components/newUser/NewUser';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/homepage" component={HomePage}>
            </Route>
          <Route exact path="/bookcard" component={BookCard}>
            </Route>
          <Route exact path='/cart' component={Page3}>
            </Route>
          <Route exact path="/checkout" component={OrderPlaced}>
            </Route>
          <Route exact path ='/login' component ={LoginPage}>
            </Route>
            <Route exact path='/signup'>
              <NewUser />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
