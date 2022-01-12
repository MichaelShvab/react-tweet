// async function TweetFetch() {
//   useEffect(() => {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ title: "React Hooks POST Request Example" }),
//     };
//     fetch(
//       "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => setPostId(data.id));
//   }, []);

//   const data = await fetch(
//     "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet"
//   );
//   const json = await data.json();
//   console.log(json);
// }

// export default TweetFetch;
