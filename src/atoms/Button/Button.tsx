import React, { ButtonHTMLAttributes } from 'react';
import '../../colors.css';
import './Button.css';

export default function Button({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`button ${className}`} type="button" {...rest} />;
}
