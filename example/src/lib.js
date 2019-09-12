import React, { useState, useCallback } from "react";

import useDimension from "react-use-dimensions";

// const s={}

export default ({ children, htmlContent, showOnClick, align }) => {
  const [show, setShow] = useState(true);

  const handleMouseOver = useCallback(() => setShow(true), []);
  const handleMouseOut = useCallback(() => setShow(false), []);

  // parent ref
  const [pRef, { width: pWidth, height: pHeight }] = useDimension();
  // floater ref
  const [fRef, { width: fWidth, height: fHeight }] = useDimension();

  // const placer = [];
  let floater, pointer, placer;

  switch (align) {
    case "top": {
      placer = {
        width: "100%",
        height: "5px",
        top: 0
      };
      floater = {
        bottom: "8px",
        left: `${0.5 * pWidth - 0.5 * fWidth}px`
      };
      pointer = {
        bottom: "-8px",
        left: "calc(50% - 8px)",
        borderTop: "8px solid #2e4c68",
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent"
      };
      break;
    }
    case "bottom":
    default: {
      placer = {
        widrh: "100%",
        height: 5
      };
      floater = {
        top: "8px",
        left: `${0.5 * pWidth - 0.5 * fWidth}px`
      };
      pointer = {
        top: "-8px",
        left: "calc(50% - 8px)",
        borderBottom: "8px solid #2e4c68",
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent"
      };
    }
  }

  return (
    <div style={{ position: "relative" }}>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} ref={pRef}>
        {children}
      </div>
      {show ? (
        <div
          style={{
            position: "absolute",
            background: "#ed5",
            ...placer
          }}
        >
          <div
            style={{
              background: "#2e4c68",
              color: "#fff",
              position: "absolute",
              padding: "16px",
              whiteSpace: "nowrap",
              ...floater
            }}
            ref={fRef}
          >
            <div
              style={{
                position: "absolute",
                ...pointer
              }}
            ></div>
            {htmlContent()}
          </div>
        </div>
      ) : null}
    </div>
  );
};
