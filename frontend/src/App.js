import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import UsersList from "./components/Users/UsersList"
import UserProfile from "./components/Users/UserProfile";
import Albums from "./components/Albums/Albums";
// import AlbumForm from "./components/Albums/AlbumForm"
import SingleAlbum from "./components/Albums/SingleAlbum"
import EditAlbum from "./components/Albums/EditAlbum";
import EditImage from "./components/Images/EditImage";
import HomeDisplay from "./components/Home/Home";

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
          <Route exact path="/">
            <HomeDisplay />
          </Route>
          <Route  path="/signup">
            <SignUpFormPage />
          </Route>
          <Route  exact path="/users">
            <UsersList />
          </Route>
          <Route  exact path="/users/:userId">
            <UserProfile />
            <Albums />
          </Route>
          <Route exact path='/users/:albumId/edit'>
            {/* <AlbumForm /> */}
          </Route>
          <Route exact path='/users/:userId/albums/:albumId/images'>
            <SingleAlbum />
          </Route>
          <Route path='/users/:userId/albums/:albumId/edit'>
            <EditAlbum />
          </Route>
          <Route exact path='/images/:imageId/edit'>
            <EditImage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
