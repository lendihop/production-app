import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";

import {Theme, useTheme} from "app/providers/ThemeProvider";
import * as cls from './ThemeSwitcher.module.scss';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Button theme={ButtonTheme.CLEAR} className={classNames(cls.ThemeSwitcher, [className])} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <LightThemeIcon/> : <DarkThemeIcon/>}
    </Button>
  );
};
