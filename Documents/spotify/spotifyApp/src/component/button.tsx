import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
