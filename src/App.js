import logo from "./logo.svg";

import "./App.css";
import Solution from "./components/Solution";
import Score from "./components/Score";
import Letter from "./components/Letter";
import Letters from "./components/Letters";

function App() {
  this.state = {
    letterStatus: {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false,
    },
  };
  return (
    <div className="App">
      <Solution />
      <Score />
      <Letter />
      <Letters />
    </div>
  );
}

export default App;
