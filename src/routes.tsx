import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import InDevelopment  from './pages/InDevelopment';

export default function AppRouter(){
    return(
        <main>
            <Router>
                <Routes>
                    <Route path='/' >    
                        <Route index element={<Home/>}></Route>
                        <Route path='portfolio' element={<InDevelopment/>}></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}