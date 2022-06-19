import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Router, Route, Routes} from "react-router-dom"
import Translate from './Translate';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Navbar from './Navbar';


const items = [
    {
        title: "Title1",
        content: "Content1"
    },
    {
        title: "Title2",
        content: "Content2"
    },
   {
        title: "Title3",
        content: "Content3"
    },
]

const App = () => {
    
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                <Route index element={<Accordion items={items}/>} />
                {/* <Route path="translate" element={<Translate />} />
                <Route path="dropdown" element={<Dropdown />} /> */}
                <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
        
      </div>
    );
}

export default App;