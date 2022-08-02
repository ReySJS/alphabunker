import { FocusEventHandler } from 'react';

interface PropTypes {
  placeholder: string
  color?: string
  type: 'text' | 'password' | 'email' | 'date'
  onBlur?: FocusEventHandler<HTMLInputElement>
}

export const Input = ({
  placeholder,
  color,
  type,
  onBlur,
}: PropTypes) => {
  return (
    <input
      type={type}
      color={color}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};
