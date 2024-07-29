import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  'data-testid'?: string;
}

const NumberInput = ({ value, onChange, placeholder, required = false, 'data-testid': dataTestId }: NumberInputProps) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      data-testid={dataTestId}
    />
  );
};

export default NumberInput;
