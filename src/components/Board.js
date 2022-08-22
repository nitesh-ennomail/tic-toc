import React from "react";
import Squre from "./Squre";

function Board() {
  return (
    <div>
      <div>
        <Squre value={0} />
        <Squre value={1} />
        <Squre value={2} />
      </div>
      <div>
        <Squre value={3} />
        <Squre value={4} />
        <Squre value={5} />
      </div>
      <div>
        <Squre value={6} />
        <Squre value={7} />
        <Squre value={8} />
      </div>
    </div>
  );
}

export default Board;
