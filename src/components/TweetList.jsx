import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { ThemeContext } from "./Context";

function TweetList(props) {
  const { tweets } = props;

  return (
    <>
      {tweets.length
        ? tweets.map((element) => {
            return (
              <div
                className="w-50 tweet rounded-3 mt-3 mb-3 p-3"
                key={element.id}
              >
                <div className="upperTweet tweet">
                  <p className="tweet">{element.userName}</p>
                  <p className="tweet">{element.date}</p>
                </div>
                <p className="tweet">{element.content}</p>
              </div>
            );
          })
        : null}
    </>
  );
}

function Loader() {
  return (
    <div className="d-flex">
      {<ReactBootStrap.Spinner animation="grow" variant="primary" />}
      <div className="ms-2"></div>
      {<ReactBootStrap.Spinner animation="grow" variant="primary" />}
      <div className="ms-2"></div>
      {<ReactBootStrap.Spinner animation="grow" variant="primary" />}
    </div>
  );
}

export { Loader, TweetList };
