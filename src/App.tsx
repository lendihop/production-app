import React, {FC, lazy, Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));

import './styles/index.scss';
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";

export const App: FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
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
