import type { Component } from 'solid-js';
import { Routes, Route } from "solid-app-router";

import Home from "./pages/Home"
import User from "./pages/User"

const App: Component = () => {
  return (
    <Routes>
      <Route path="/user" component={User} />
      <Route path="/" component={Home} />
      <Route path="/about" element={<div>This site was made with Solid</div>} />
    </Routes>
  );
}

export default App;
