import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';
import {Navbar} from "widgets/Navbar";

export const App: FC = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  );
};
