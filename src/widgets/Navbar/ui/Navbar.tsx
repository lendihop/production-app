import React, { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import * as cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED} className={cls.mainLink}>
          Home
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
          About
        </AppLink>
      </div>
    </div>
  );
};
