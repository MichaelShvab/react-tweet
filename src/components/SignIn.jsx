import React, { useState } from "react";
import { auth } from "../App";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function handleClick() {
    console.log(email);
    console.log(password);
    // const response = await auth.createUserWithEmailAndPassword(email, password);
    // console.log(response);
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  }

  console.log(auth);
  return (
    <>
      <input
        type="text"
        placeholder="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Sign-In</button>
    </>
  );
}

export default SignIn;
