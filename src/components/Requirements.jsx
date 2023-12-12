import React from 'react';
import {styled} from 'styled-components';
import Checkmark from "../assets/icons/Checkmark";
import Xmark from "../assets/icons/Xmark";

export default function Requirements(){

    return (
        <section>
            <h4>Password Requirements</h4>
            <ul>
                <li> <Checkmark/>At least 6 characters</li>
                <li><Xmark/> A lowercase character</li>
                <li>A uppercase character</li>
                <li>A number</li>
                <li>{'A special character (!@#$%^&*()_-+={[}]|:;"\'<,>.)'}</li>
            </ul>
        </section>
    )
}

// Has two input fields to validate the entry from the user (both inputs must match)
// Password has a min length of 6 characters
// Password has at least 1 uppercase character
// Password has at least 1 lowercase character
// Password has at least 1 number
// Password has at least 1 special character (!@#$%^&*()_-+={[}]|:;"'<,>.)