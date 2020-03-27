import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";

import GlobalStyle from './styles/global';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Topbar />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
