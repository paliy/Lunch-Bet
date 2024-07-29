import React, { forwardRef } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

TextInput.displayName = 'TextInput';

export default TextInput;
