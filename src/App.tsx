import React, {useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Card } from './model/Card';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import GalleryPage from './pages/GalleryPage';
import Header from './pages/Header';
import ImpressumPage from './pages/ImpressumPage';

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<ImpressumPage />} />
                <Route path={"/gallery"} element={<GalleryPage />} />
                <Route path={'/character/:id'} element={<CharacterDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}