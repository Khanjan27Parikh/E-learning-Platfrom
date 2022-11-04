import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Contact from './Contact';

function App() {
    return (
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
    );
}

export default App;