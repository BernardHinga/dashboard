import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Nav } from "./nav";
import { Dash } from "./dashboard";
import { Set } from "./settings";
import { Alert } from "./notification";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Nav />
        <Routes>
          <Route path='/' element={<Dash />} />
          <Route path='/settings' element={<Set />} />
          <Route path='/notifications' element={<Alert />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
