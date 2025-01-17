import React from "react";
import style from "./input.module.sass";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  iconClass: string;
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({label, placeholder, type, iconClass, value, onChange}) => {
  return (
    <label htmlFor={label}>
      {label}:
      <div className={style.input_body}>
        <i className={iconClass}></i>
        <input
          type={type}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          required
          value={value || ""}
        />
      </div>
    </label>
  );
};

export default InputField;
