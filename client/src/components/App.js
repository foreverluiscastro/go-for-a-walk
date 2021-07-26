import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import Home from '../pages/Home';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          {/* <Route exact path="/new">
            <NewComic user={user} />
          </Route> */}
          <Route exact path="/" component={Home}/>
          {/* <Route exact path="/comics">
            <ComicList />
          </Route>
          <Route exact path="/marvelcomics">
            <MarvelComicsList/>
          </Route>
          <Route exact path="/allcomics">
            <AllComicsList />
          </Route>
          <Route path="/allcomics/:id" component={PublicComicPage}/>
          <Route path="/comics/:id/edit" component={EditComic} />
          <Route path="/comics/:id" component={ComicPage}/> */}
        </Switch>
      </main>
    </>
  );
}

export default App;