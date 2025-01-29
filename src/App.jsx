import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/layout';
import ServiceDetail from './components/storitev';
import Cenik from './pages/cenik';
import About from './pages/about';
import Kontakt from './pages/kontakt';

const App = () => {
  return (
    <>
      <Routes>
        {/* Define the root route for the Layout component */}
        <Route path="/" element={<Layout />}>
          {/* Nested route for the Home page */}
          <Route path="/domov" element={<Home />} />
          <Route path="/onas" element={<About />} />
          <Route path="/cenik" element={<Cenik />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/storitev/:serviceId" element={<ServiceDetail />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;

