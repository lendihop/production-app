import React, {FC} from 'react';

import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import './styles/index.scss';
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export const App: FC = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};
