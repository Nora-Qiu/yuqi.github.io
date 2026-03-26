import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import News from './pages/News';
import Publications from './pages/Publications';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="publications" element={<Publications />} />
      </Route>
    </Routes>
  );
};

export default App;