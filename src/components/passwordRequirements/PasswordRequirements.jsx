import React, {memo} from 'react';
import {styled} from 'styled-components';

import Checkmark from "../../assets/icons/Checkmark";
import Xmark from "../../assets/icons/Xmark";

const ListElementStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

const PasswordSection = styled.section`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  border-color: ${({noerrors}) => {
    return noerrors === 'true' ? 'green' : 'red';
  }};
`

function PasswordRequirements({passwordRequirements}) {
    const validationListItems = Object.keys(passwordRequirements).map((passwordRequirement, index) => {
        return (
            <ListElementStyled key={index}>
                {passwordRequirements[passwordRequirement].valid ? <Checkmark/> : <Xmark/>}
                {passwordRequirements[passwordRequirement].requirementMessage}
            </ListElementStyled>
        )
    });

    const noErrors = Object.keys(passwordRequirements).every(passwordRequirement => passwordRequirements[passwordRequirement].valid);

    return (
        <PasswordSection noerrors={noErrors ? 'true': 'false'}>
            <h4>Password Requirements</h4>
            <ul>
                {validationListItems}
            </ul>
        </PasswordSection>
    )
}

export default memo(PasswordRequirements);