import React, { FC, PropsWithChildren } from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkProps extends PropsWithChildren, LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, theme = AppLinkTheme.PRIMARY, className, children, ...rest }) => {
  return (
    <Link to={to} className={classNames(cls.AppLink, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
};
