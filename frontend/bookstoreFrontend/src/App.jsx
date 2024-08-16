import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import CreateBooks from './pages/CreateBook/CreateBook';
import DeleteBook from './pages/DeleteBook/DeleteBook';
import EditBook from './pages/EditBook/EditBook';
import ShowBook from './pages/ShowBook/ShowBook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/profile' element={<Profile/>} /> */}
          <Route path='/books/create' element={<CreateBooks />} />  
          <Route path='/books/delete/:id' element={<DeleteBook />} />  
          <Route path='/books/edit/:id' element={<EditBook />} />
          <Route path='/books/details/:id' element={<ShowBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;