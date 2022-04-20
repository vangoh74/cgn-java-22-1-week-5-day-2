import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
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
            </Routes>
        </BrowserRouter>
    );
}