import React from "react";
import "./index.css";
import Nav from "./components/layout/Nav";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </>
    );
};

export default App;
