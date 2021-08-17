import HomePage from './components/home-page/home-page.jsx';
import BookCard from "./components/card/card.jsx";
import Page3 from './components/page3/Page3';
import OrderPlaced from './components/orderPlaced/OrderPlaced';
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Switch>
      <Route exact path="/homepage" component={HomePage}>
      </Route>
      <Route exact path="/BookCard" component={BookCard}>
      </Route>
      <Route exact path='/page3' component={Page3}>
      </Route>
      <Route exact path="/orderPlaced" component={OrderPlaced}>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
