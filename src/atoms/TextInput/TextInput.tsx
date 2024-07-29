import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  'data-testid'?: string;
}

const TextInput = ({ value, onChange, placeholder, required = false, 'data-testid': dataTestId }: TextInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      data-testid={dataTestId}
    />
  );
};

export default TextInput;
