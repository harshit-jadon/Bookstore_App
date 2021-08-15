import BookCard from "./components/card/card.jsx";
import HomePage from './components/home-page/home-page.jsx';
import { BrowserRouter, Switch,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path="/BookCard">
        <BookCard />
      </Route>
      <Route exact path="/homepage">
        <HomePage/>
      </Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
