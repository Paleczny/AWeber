import React from 'react';
import {styled} from 'styled-components';

const SVGStyled = styled.svg`
  height: 22px;
  width: 22px;
`
export default function Xmark() {

    return (
        <SVGStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c30010" stroke="#c30010" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </SVGStyled>
    )
}