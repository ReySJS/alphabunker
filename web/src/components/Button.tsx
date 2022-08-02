import { X } from 'phosphor-react';
import { MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';

interface PropTypes {
  category: 'primary' | 'secondary' | 'cancel';
  label: string;
  type: 'button' | 'submit';
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Archive: src/components/Button.tsx
 *
 * Description: Button component
 *
 * Date: 2022/07/22
 *
 * Author: Rey
 */

export const Button = ({ label, type, onClick, category }: PropTypes) => (
  <button className={`h-10 px-3 text-btn-text rounded btn-${category}`} type={type} onClick={onClick}>
    {label}
  </button>
);
