import React, { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({ children, className, theme, ...rest }) => {
  return (
    <button {...rest} className={classNames(cls.Button, [className, cls[theme]])}>
      {children}
    </button>
  );
};
