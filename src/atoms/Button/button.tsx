import React from 'react';
import './button.css';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  'data-testid'?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ size, variant, onClick, children, 'data-testid': dataTestId, type = 'button' }: ButtonProps) => {
  const classNames = `btn btn-${size} btn-${variant}`;

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
