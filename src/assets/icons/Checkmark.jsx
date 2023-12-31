import React from 'react';
import {styled} from 'styled-components';

const SVGStyled = styled.svg`
  height: 22px;
  width: 22px;
`
export default function Checkmark() {

    return (
        <SVGStyled version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48">
                <polygon fill="#43A047" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon>
        </SVGStyled>
    )
}