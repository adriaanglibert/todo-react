import './App.css';

import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ROUTES } from './constants/routes';
import Settings from './pages/Settings';
import { useState } from 'react';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState('Adriaan');

  return (
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
              <Route path={ROUTES.HOME} element={<BaseLayout/>}>
                  <Route index element={<Home/>}  />
                  <Route path={ROUTES.ABOUT} element={<About/>}  />
                  <Route path={ROUTES.SETTINGS} element={<Settings/>}  />
                  <Route path="*" element={<NotFound/>} />
              </Route>
          </Routes>
        </UserContext.Provider>
  )
}

export default App;