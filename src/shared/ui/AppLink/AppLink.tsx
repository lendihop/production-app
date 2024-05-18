import {FC, PropsWithChildren} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import * as cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends PropsWithChildren, LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({to, theme = AppLinkTheme.PRIMARY, className, children, ...rest}) => {
  return (
    <Link to={to} className={classNames(cls.AppLink, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
};
