import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../components/Header';
import Detail from '../pages/Detail';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Create from '../pages/Create';
import Update from '../pages/Update';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:memeId" element={<Detail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:memeId" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
