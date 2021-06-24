import React, { Component } from "react";

class Solution extends Component {
  render() {
    const word = "johnwick";
    let underscore = [];
    for (let index = 0; index < word.length; index++) {
      underscore.push(<span> _ </span>);
    }
    return (
      <div>
        Solution
        {underscore}
      </div>
    );
  }
}
export default Solution;
