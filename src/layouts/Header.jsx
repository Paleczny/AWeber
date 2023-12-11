import React from 'react';

import AWeber from '../assets/icons/AWeber';
import {styled} from 'styled-components';

const HeaderStyled = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  padding: 25px;
  background-color: white;
`

export default function Header(){
    return (
        <HeaderStyled>
            <AWeber/>
            AWeber React Assignment
        </HeaderStyled>
    )
}