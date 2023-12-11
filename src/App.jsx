import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './layouts/Layout';
import Password from './components/password/Password';

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Password/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
