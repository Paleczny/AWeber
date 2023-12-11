import React from 'react';
import {Outlet} from 'react-router-dom';
import {styled} from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const MainStyled = styled.main`
  margin: auto 0;
`

export default function Layout() {

    return (
        <div className="site-wrapper">
            <Header />
            <MainStyled>
                <Outlet />
            </MainStyled>
            <Footer />
        </div>
    )
}
