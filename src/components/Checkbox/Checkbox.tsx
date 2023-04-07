import React, { forwardRef, ReactNode } from "react";

import "./checkbox.scss";

export const Checkbox: React.FC = forwardRef((props, ref) => {
  return (
    <label className="checkboxBlock">
      <input
        ref={ref}
        type="checkbox"
        className="checkboxBlock__origInput"
        {...props}
      />
      <span className="checkboxBlock__input" />
      Remember me
    </label>
  );
});
