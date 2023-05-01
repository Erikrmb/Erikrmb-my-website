import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InDevelopment  from './pages/InDevelopment';
import About from 'pages/About';
import DefaultPage from 'pages/DefaultPage';

export default function AppRouter(){
    return(
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<DefaultPage/>}>    
                        <Route index element={<Home/>}></Route>
                        <Route path='portfolio' element={<InDevelopment/>}></Route>
                        <Route path='about' element={<About/>}></Route>
                        <Route path='blog'></Route>
                        <Route path='resume'></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}