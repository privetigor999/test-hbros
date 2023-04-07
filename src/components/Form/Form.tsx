import { BaseSyntheticEvent, FC, ReactNode } from "react";

import "./form.scss";

interface FormProps {
  children: ReactNode;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
}

export const Form: FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className="form" {...props} noValidate>
      {children}
    </form>
  );
};
