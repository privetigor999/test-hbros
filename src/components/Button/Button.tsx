import React, { FC, ReactNode } from "react";

import "./button.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "submit";
}

export const Button: FC<ButtonProps> = ({ type, children }) => {
  const styles = `button ${type === "submit" ? "button-submit" : null}`;

  return <button className={styles}>{children}</button>;
};
