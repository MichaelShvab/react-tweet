import "./App.css";
import { TweetList, Loader } from "./components/TweetList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import CreateTweet from "./components/CreateTweet";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import { ThemeContext } from "./components/Context";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import firebase from "firebase";
import PrivateRoute from "./components/PrivateRoute";

const firebaseConfig = {
  apiKey: "AIzaSyDeYhtsOCm3JzHnN-7xrly3OwDC0BrxPdk",
  authDomain: "micro-tweet.firebaseapp.com",
  projectId: "micro-tweet",
  storageBucket: "micro-tweet.appspot.com",
  messagingSenderId: "551340377156",
  appId: "1:551340377156:web:dff74a1797ae51886fa811",
  measurementId: "G-FLR7BPD0XZ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

function App() {
  const initialState = JSON.parse(localStorage.getItem("profile")) || [];
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(initialState);
  const [redirect] = useState(false);

  return (
    <Router>
      <ThemeContext.Provider
        value={
          (tweet,
          setTweet,
          tweets,
          setTweets,
          loading,
          setLoading,
          profile,
          setProfile)
        }
      >
        <div className="mainBody">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <CreateTweet
                tweet={tweet}
                setTweet={setTweet}
                tweets={tweets}
                setTweets={setTweets}
                loading={loading}
                setLoading={setLoading}
                profile={profile}
              />

              {loading ? (
                <TweetList
                  tweets={tweets}
                  tweet={tweet}
                  setTweet={setTweet}
                  setTweets={setTweets}
                />
              ) : (
                <Loader />
              )}
            </Route>
            <Route path="/profile">
              <Profile profile={profile} setProfile={setProfile} />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn redirect={redirect} />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
