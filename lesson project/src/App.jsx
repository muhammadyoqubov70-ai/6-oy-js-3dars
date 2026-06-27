import React from "react";

function App() {
  let [state, setState] = useState(1);
  console.log("men app coppninetman render bolayapman", state);
  function increment() {
    setState(++state);
    console.log(state);
  }
  function decremnt() {
    setState(--state);
    console.log(state);
  }
  function reset() {
    setState(1);
    console.log(state);
  }
}
