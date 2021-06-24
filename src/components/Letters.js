import React, { Component } from "react";

class Letters extends Component {
  render() {
    return (
      <div>
        Letters
        {ab.map((letter) => {
          return <span> {letter} </span>;
          //   <Letter leterr={letter}></Letter>
        })}{" "}
      </div>
    );
  }
}
export default Letters;
