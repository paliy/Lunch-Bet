import React, { forwardRef } from 'react';

interface NumberInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  return <input type="number" ref={ref} {...props} />;
});

NumberInput.displayName = 'NumberInput';

export default NumberInput;
