import React, { useState } from "react";

interface DateInputProps {
  id: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DateInputMask: React.FC<DateInputProps> = ({ id, placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    let formattedInput = "";

    if (input.length > 0) formattedInput = input.substring(0, 2);
    if (input.length > 2) formattedInput += "/" + input.substring(2, 4);
    if (input.length > 4) formattedInput += "/" + input.substring(4, 8);

    setValue(formattedInput);
    onChange(e);
  };

  return (

      <input
        type="text"
        id={id}
        placeholder={placeholder || "DD/MM/AAAA"}
        value={value}
        onChange={handleChange}
        maxLength={10} 
        pattern="\d{2}/\d{2}/\d{4}"
        required
      />

  );
};

export default DateInputMask;
