import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView, FavoritesView, MovieView, NotFoundView } from "./views";
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomeView/>} />
          <Route path="movies">
            <Route path="favorites" element={<FavoritesView />} />
            <Route path=":id" element={<MovieView />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundView/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

