import React from 'react';
import {styled} from 'styled-components';

const FooterStyled = styled.footer`
  background-color: white;
  height: 74px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  font-weight: 500;
`
export default function Footer() {
    return (
        <FooterStyled>
            footer
        </FooterStyled>
    )
}