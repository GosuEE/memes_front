import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Header from '../components/Header';
<<<<<<< Updated upstream
import App from '../App';
import Detail from '../pages/Detail';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
=======
import Create from '../pages/Create';
import Update from '../pages/Update';
>>>>>>> Stashed changes

function Router() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
<<<<<<< Updated upstream
        <Route path="/detail" element={<Detail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/create" element={<Create />} />
        <Route path="/update/:postId" element={<Update />} />
>>>>>>> Stashed changes
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
