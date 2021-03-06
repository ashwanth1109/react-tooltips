import React, { useState } from "react";
import "./App.css";

// import Tooltip from "@ashwanth1109/react-tooltip";
import Tooltip from "./lib";

export default () => {
  const [top, setTop] = useState(200);
  const [left, setLeft] = useState(200);

  const renderContent = () => (
    <>
      <div>Tooltip title goes here</div>
      <div>Tooltip description goes here</div>
    </>
  );

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
      <div className="hoverTarget" style={{ top, left }}>
        <Tooltip htmlContent={renderContent} align="top">
          <div className="hoverContainer">Hover on this for tooltip</div>
        </Tooltip>
      </div>
    </div>
  );
};
