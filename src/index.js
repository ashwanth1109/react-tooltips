import React, { useState, useCallback } from "react";

import useDimension from "react-use-dimensions";

export default ({ children, htmlContent, showOnClick }) => {
  const [show, setShow] = useState(false);

  const handleMouseOver = useCallback(() => setShow(true), []);
  const handleMouseOut = useCallback(() => setShow(false), []);

  // parent ref
  const [pRef, { width: pWidth, height: pHeight }] = useDimension();
  // floater ref
  const [fRef, { width: fWidth, height: fHeight }] = useDimension();

  return (
    <div className="container">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} ref={pRef}>
        {children}
      </div>
      {show ? (
        <div className="placer">
          <div className="floater" ref={fRef}>
            {htmlContent}
          </div>
        </div>
      ) : null}
    </div>
  );
};
