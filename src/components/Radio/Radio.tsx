import React, { forwardRef } from "react";

import "./radio.scss";

export const Radio = () => {
  const [current, setCurrent] = React.useState("Радио кнопка 1");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrent(e.target.value);
  };

  return (
    <div className="radioblock">
      <label className="radio">
        <input
          className="radio__input"
          id="radio-item-1"
          name="radio-item-1"
          type="radio"
          value="Радио кнопка 1"
          onChange={handleRadioChange}
          checked={current === "Радио кнопка 1"}
        />
        <span className="radio__span">Радио кнопка 1</span>
      </label>
      <label className="radio">
        <input
          className="radio__input"
          id="radio-item-2"
          name="radio-item-2"
          type="radio"
          value="Радио кнопка 2"
          onChange={handleRadioChange}
          checked={current === "Радио кнопка 2"}
        />
        <span className="radio__span">Радио кнопка 2</span>
      </label>
      <label className="radio">
        <input
          className="radio__input"
          id="radio-item-3"
          name="radio-item-3"
          type="radio"
          value="Радио кнопка 3"
          onChange={handleRadioChange}
          checked={current === "Радио кнопка 3"}
        />
        <span className="radio__span">Радио кнопка 3</span>
      </label>
    </div>
  );
};
