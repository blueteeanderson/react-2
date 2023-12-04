import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NotFound from "./NotFound";
import AddItem from "./AddItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  //category whether drinks or snacks
  const [category, setCategory] = useState('snacks');

  useEffect(() => {
    async function getItems() {
      setIsLoading(true);
      let items = await SnackOrBoozeApi.getItems(category);
      setItems(items);
      setIsLoading(false);
    }
    getItems();
  }, [category]);

  if (isLoading) {
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <p>Loading &hellip;</p>;
      </BrowserRouter>
    </div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home items={items} />
            </Route>
            <Route exact path="/add">
              <AddItem />
            </Route>
            <Route exact path="/:category(snacks|drinks)">
              <Menu items={items} setCategory={setCategory} title="Snacks" />
            </Route>
            <Route exact path="/:category/:id">
              <MenuItem items={items} cantFind="/$category" />
            </Route>
 
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
