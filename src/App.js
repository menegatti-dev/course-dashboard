import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
