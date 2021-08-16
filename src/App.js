import BookCard from "./components/card/card.jsx";
import HomePage from './components/home-page/home-page.jsx';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Page3 from './components/page3/Page3';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/homepage">
        <BookCard />
      </Route>
      <Route exact path="/BookCard">
        <HomePage/>
      </Route>
      <Route exact path='/page3'>
        <Page3 />
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
