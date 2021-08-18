import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UsersList from "./components/Users/UsersList"
// import Albums from "./components/Albums/Albums"
import UserProfile from "./components/Users/UserProfile";
import Albums from "./components/Albums/Albums";
import AlbumForm from "./components/Albums/AlbumForm"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/signup,">
            <SignUpFormPage />
          </Route>
          <Route  exact path="/users">
            <UsersList />
          </Route>
          <Route  exact path="/users/:userId(\\d+)">
            <UserProfile />
          </Route>
          <Route path='/users/:userId/albums'>
            <Albums />
            <AlbumForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
