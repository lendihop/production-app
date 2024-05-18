import React, {FC, lazy, Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";

const MainPage = lazy(() => import("pages/MainPage"));
const AboutPage = lazy(() => import("pages/AboutPage"));

import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";

export const App: FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};
