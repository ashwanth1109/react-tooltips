import React, { useState } from "react";
import "./App.css";

// import Tooltip from "../../lib";

export default () => {
  const [top, setTop] = useState(200);
  const [left, setLeft] = useState(200);

  // const renderContent = () => (
  //   <>
  //     <div>Tooltip title goes here</div>
  //     <div>Tooltip description goes here</div>
  //   </>
  // );

  console.log(Tooltip);

  return (
    <div className="container">
      <div className="inputContainer">
        <div className="flex col aCenter">
          <div className="label">Top:</div>
          <input
            type="number"
            className="input"
            value={top}
            onChange={e => setTop(e.target.value)}
          />
        </div>
        <div className="flex col aCenter">
          <div className="label">Left:</div>
          <input
            type="number"
            className="input"
            value={left}
            onChange={e => setLeft(e.target.value)}
          />
        </div>
      </div>
      {/* <Tooltip> */}
      <div className="hoverTarget" style={{ top, left }}>
        Hover on this for tooltip
        {/* <Tooltip>Hello</Tooltip> */}
      </div>
      {/* </Tooltip> */}
    </div>
  );
};
