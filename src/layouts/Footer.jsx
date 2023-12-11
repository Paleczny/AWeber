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

const ParagraphStyled = styled.p`
  font-size: 14px;
`

export default function Footer() {
    return (
        <FooterStyled>
            <ParagraphStyled> Brandon Paleczny - React- Assignment</ParagraphStyled>
        </FooterStyled>
    )
}