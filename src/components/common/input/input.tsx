import React from "react";
import style from "./input.module.sass";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  iconClass: string;
  color: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({label, placeholder, type, iconClass, onChange, color}) => {
  return (
    <label htmlFor={label}>
      {label}:
      <div className={style.input_body} style={{ backgroundColor: color }}>
        <i className={iconClass}></i>
        <input
          type={type}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          required
        />
      </div>
    </label>
  );
};

export default InputField;
