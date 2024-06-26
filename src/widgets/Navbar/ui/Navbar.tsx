import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import * as cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.INVERTED} className={cls.mainLink}>
          {t('home')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.INVERTED}>
          {t('about')}
        </AppLink>
      </div>
    </div>
  );
};
