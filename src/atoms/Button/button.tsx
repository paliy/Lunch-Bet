import React from 'react';
import './Button.css';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  'data-testid'?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  size,
  variant,
  onClick,
  children,
  'data-testid': dataTestId,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const classNames = `btn btn-${size} btn-${variant}`;

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
