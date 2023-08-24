import React from "react";
import "./index.css";
import Nav from "./components/layout/Nav";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
    return (
        <>
            <Nav />
            <div className='font-montserrat'>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/recipe/:id' element={<RecipeDetails />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
