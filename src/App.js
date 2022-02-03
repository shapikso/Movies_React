import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import Movies from './components/Movies/Movies';
import MoviePage from './components/MoviePage';

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path='/sing-up' element={<SingUp />}/>
                <Route path='/movies' element={<Movies />}/>
                <Route path="/movies/:id" element={<MoviePage />}/>
                <Route path='/' element={<SingIn />}/>
            </Routes>
        </MainLayout>
    );
};

export default App;
