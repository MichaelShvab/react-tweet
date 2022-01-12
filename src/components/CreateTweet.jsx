import { useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "./Context";
// import ls from "local-storage";
// import TweetFetch from "./TweetFetch";

function CreateTweet(props) {
  const { tweet, tweets, setTweets, setTweet, setLoading, profile } = props;
  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  useEffect(() => {
    TweetGet();
    setInterval(() => {
      TweetGet();
    }, 3000);
  }, []);

  async function TweetPost() {
    const newItem = {
      content: tweet,
      userName: profile,
      date: new Date().toISOString(),
    };
    try {
      setLoading(false);
      const res = await axios.post(url, newItem);
      console.log(res);
      console.log(newItem);

      setTweets([...tweets]);
      setLoading(true);
      setTweet("");
    } catch (e) {
      console.log(e);
      throw new Error(e);
    }
  }

  async function TweetGet() {
    try {
      const res = await axios.get(url);
      setTweets(res.data.tweets);
      setLoading(true);
    } catch (e) {
      console.log(e);
      throw Error(e);
    }
  }

  return (
    <>
      <div className="d-flex flex-column w-50 border border-light rounded-3 m-3 p-3">
        <ThemeContext.Consumer>
          {(value) => (
            <textarea
              value={value.tweet}
              onChange={(e) => setTweet(e.target.value)}
              className="Textarea"
              rows="5"
              placeholder="What you have in mind..."
            ></textarea>
          )}
        </ThemeContext.Consumer>
        <div>
          <button
            className="btn btn-primary button"
            onClick={() => TweetPost()}
          >
            Tweet
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateTweet;
