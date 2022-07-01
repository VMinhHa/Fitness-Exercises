import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () => {
    return (
        <div>
            <Box width="400%" sx={{ width: { xl: '1448px'}}} m="auto" >
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/exercise/:id" element={<ExerciseDetail />} />
                </Routes>
                <Footer />
            </Box>
        </div>
    );
};

export default App;