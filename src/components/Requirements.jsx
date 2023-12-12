import React, {memo} from 'react';
import {styled} from 'styled-components';
import Checkmark from "../assets/icons/Checkmark";
import Xmark from "../assets/icons/Xmark";

const ListElementStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
`

function Requirements({validationErrors}) {

    return (
        <section>
            <h4>Password Requirements</h4>
            <ul>
                <ListElementStyled>
                    {validationErrors.includes('minLength') || !validationErrors.length ? <Xmark/> : <Checkmark/>}
                    At least 6 characters
                </ListElementStyled>

                <ListElementStyled>
                    {validationErrors.includes('lowerCase') || !validationErrors.length ? <Xmark/> : <Checkmark/>}
                    A lowercase character
                </ListElementStyled>

                <ListElementStyled>
                    {validationErrors.includes('upperCase') || !validationErrors.length ? <Xmark/> : <Checkmark/>}
                    A upperCase character
                </ListElementStyled>

                <ListElementStyled>
                    {validationErrors.includes('number') || !validationErrors.length ? <Xmark/> : <Checkmark/>}
                    A number
                </ListElementStyled>

                <ListElementStyled>
                    {validationErrors.includes('special') || !validationErrors.length ? <Xmark/> : <Checkmark/>}
                    {'A special character (!@#$%^&*()_-+={[}]|:;"\'<,>.)'}
                </ListElementStyled>
            </ul>
        </section>
    )
}

export default memo(Requirements)