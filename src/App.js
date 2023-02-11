import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./pages/Filter";
import InitialPage from "./pages/InitialPage";
import './styles/global.scss';

const App = () => {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Filter/>}/>
                
            </Routes>
          </BrowserRouter>
        </>
    );
};


export default App;
