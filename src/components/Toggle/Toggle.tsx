import React, { FC, forwardRef, useState } from "react";

import "./toggle.scss";

export const Toggle: FC = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  const inputStyles = `toggle ${toggle && "toggle-active"}`;

  return (
    <div className={inputStyles}>
      <input
        type="checkbox"
        className="toggle__input"
        id="checkbox"
        ref={ref}
        {...props}
      />
      <label
        htmlFor="checkbox"
        className="toggle__label"
        onClick={() => setToggle((prev) => !prev)}
      ></label>
      <p className="toggle__text"> {toggle ? "On" : "Off"}</p>
    </div>
  );
});
