import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import InDevelopment  from './pages/InDevelopment';
// import About from 'pages/About';
import DefaultPage from 'pages/DefaultPage';
// import Blog from 'pages/Blog';

export default function AppRouter(){
    return(
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage/>}>    
                        <Route index element={<Home/>}></Route>
                        <Route path='portfolio' element={<InDevelopment/>}></Route>
                        <Route path='about' element={<InDevelopment/>}></Route>
                        <Route path='blog' element={<InDevelopment/>}></Route>
                        <Route path='resume' element={<InDevelopment></InDevelopment>}></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}