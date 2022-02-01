import './App.scss';
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import Movies from './components/Movies/Movies';
import MoviePage from './components/MoviePage';


class App extends Component {

    render() {
        return (
            <MainLayout>
                <Switch>
                    <Route path='/sing-up'> <SingUp /> </Route>
                    <Route path='/movies'> <Movies /> </Route>
                    <Route path='/movie/:id'> <MoviePage /> </Route>
                    <Route path='/' exact> <SingIn /> </Route>
                </Switch>
            </MainLayout>
        );
    }
}

export default App;
