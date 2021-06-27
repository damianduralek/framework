import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from "styled-reset";
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';


import MainPage from './components/Main/Main'

ReactDOM.render(
    <>
        <Reset/>
        <MainPage/>
    </>,

    document.getElementById('root')
);