import React, {memo} from 'react';
import {styled} from 'styled-components';

import Checkmark from "../assets/icons/Checkmark";
import Xmark from "../assets/icons/Xmark";

const ListElementStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

function Requirements({passwordRequirements}) {
    const validationListItems = Object.keys(passwordRequirements).map((passwordRequirement, index) => {
        return (
            <ListElementStyled key={index}>
                {passwordRequirements[passwordRequirement].valid ? <Checkmark/> : <Xmark/>}
                {passwordRequirements[passwordRequirement].requirementMessage}
            </ListElementStyled>
        )
    });

    return (
        <section>
            <h4>Password Requirements</h4>
            <ul>
                {validationListItems}
            </ul>
        </section>
    )
}

export default memo(Requirements);