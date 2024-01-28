import { useState } from "react";

export const Contact = ({ value }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (event) => {
    const newNumber = event.target.value;
    setFormattedValue(formatNumber(newNumber));
  };

  return <input type="text" value={formattedValue} onChange={handleChange} />;
};

const formatNumber = (number) => {
  if (!number) {
    return "";
  }

  const formattedNumber = number.replace(/\d+/g, (digits) => {
    const chunks = digits.split("");
    const chunkLength = chunks.length;

    if (chunkLength <= 3) {
      return digits;
    }

    return chunks.slice(0, 3).join("") + "-";
  });

  return formattedNumber;
};
