import './App.css';

import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ROUTES } from './constants/routes';
import React from 'react'
import Settings from './pages/Settings';

const App = () => {
  return (
        <Routes>
            <Route path={ROUTES.HOME} element={<BaseLayout/>}>
                <Route index element={<Home/>}  />
                <Route path={ROUTES.ABOUT} element={<About/>}  />
                <Route path={ROUTES.SETTINGS} element={<Settings/>}  />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
  )
}

export default App;