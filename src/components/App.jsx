import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Profile, Movies, MoviesInfo, Actors } from './';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/movies/:id" element={<MoviesInfo />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
