import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shares/Header';
import MainSlider from '../pages/shares/MainSlider/MainSlider';

const Main = () => {
    return (
        <div>

            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;