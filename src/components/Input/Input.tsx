import React, { FC, forwardRef, ReactNode } from "react";

import "./input.scss";
import errorSvg from "./../../assets/error.svg";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types";

interface InputProps {
  placeholder: string;
  id: string;
  label: ReactNode;
  error?: boolean;
  type: string;
  helpertext?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  ref?: React.Ref<HTMLInputElement>;
}

export const Input: FC<InputProps> = forwardRef((props, ref) => {
  const inputStyles = `inputBlock__input ${props?.error &&
    "inputBlock__input-error"}`;

  const helperStyles = `inputBlock__helper ${props?.error &&
    "inputBlock__helper-error"}`;

  return (
    <div className="inputBlock">
      <label htmlFor={props.id} className="inputBlock__label">
        {props.label}
      </label>
      <div style={{ position: "relative" }}>
        <input {...props} ref={ref} id={props.id} className={inputStyles} />
        {props?.error && (
          <img src={errorSvg} alt="error" className="inputBlock__errorImg" />
        )}
      </div>

      <p className={helperStyles}>{props?.helpertext}</p>
    </div>
  );
});
