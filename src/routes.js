import React from 'react';

import {
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main';

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
    </Routes>
  );
}
