import './App.scss';
import React, {Component} from 'react';
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import SingIn from "./components/SingIn/SingIn";
import SingUp from "./components/SingUp/SingUp";
import Movies from "./components/Movies/Movies";

class App extends Component {
    render() {
        return (
            <MainLayout>
                <Routes >
                    <Route path="/sing-up" element={<SingUp />} />
                    <Route path="/" element={<SingIn />} />
                    <Route path="/movies"  element={<Movies />}/>
                </Routes>
            </MainLayout>
        );
    }
}

export default App;
