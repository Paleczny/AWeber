import React, {useState} from 'react';
import {styled} from 'styled-components';

import Requirements from '../Requirements';

const SectionStyled = styled.section`
  padding-left: 25px;
  display: flex;
  justify-content: center;
`

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 30px;
`

const LabelInputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const SubmitButtonStyled = styled.button`
  background-color: #246BE8;
  border: none;
  border-radius: 6px;
  height: 45px;
  color: white;
  font-family: "Inter", sans-serif;

  &:hover {
    background-color: #0c53cf;
    cursor: hand;
  }

  &:active {
    background-color: #0c7ac0;
  }

  &:disabled {
    background-color: grey;
    cursor: unset;
  }
`

const ComponentContainer = styled.div`
  justify-content: space-around;
  display: flex;
`

export default function Password() {
    const [passwordForm, setPasswordForm] = useState({
        password: '',
        confirmPassword: ''
    });

    const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);

    const passwordRequirements = {
        number: {
            valid: /\d/g,
            name: 'number'
        },
        upperCase: {
            valid: /[A-Z]/g,
            name: 'upperCase'
        },
        lowerCase: {
            valid: /[a-z]/g,
            name: 'lowerCase'
        },
        minLength: {
            valid: /^.{6,}$/g,
            name: 'minLength'
        },
        special: {
            valid: /[!@#$%^&*()_/\-+={\[\]}|:;"'<,>.]/g,
            name: 'special'
        }
    };


    function handleOnPasswordFormChange(event) {
        const {name, value} = event.target;
        setPasswordForm(passwordForm => {
            return {
                ...passwordForm,
                [name]: value
            }
        });
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        let validationErrors = [];

        Object.keys(passwordRequirements).map(ruleDefinition => {
            !passwordForm.password.match(passwordRequirements[ruleDefinition].valid)
            && validationErrors.push(passwordRequirements[ruleDefinition].name)
        });

        setPasswordValidationErrors(validationErrors);
    }

    function isSubmitDisabled() {
        const {password, confirmPassword} = passwordForm;
        const empty = !confirmPassword || !password;
        const equal = confirmPassword === password;
        return empty || !equal;
    }

    return (
        <ComponentContainer>
            <SectionStyled>
                <Requirements/>
            </SectionStyled>
            <SectionStyled>
                <FormStyled onSubmit={handleOnSubmit}>
                    <LabelInputContainerStyled>
                        <label htmlFor='password'>Password</label>
                        <input name='password'
                               value={passwordForm.password}
                               onChange={handleOnPasswordFormChange}
                               id='password'
                               type='text'>
                        </input>
                    </LabelInputContainerStyled>
                    <LabelInputContainerStyled>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            value={passwordForm.confirmPassword}
                            onChange={handleOnPasswordFormChange}
                            type='text'>
                        </input>
                    </LabelInputContainerStyled>
                    <LabelInputContainerStyled>
                        <SubmitButtonStyled
                            data-testid='button'
                            disabled={isSubmitDisabled()}>
                            Submit
                        </SubmitButtonStyled>
                    </LabelInputContainerStyled>
                </FormStyled>
            </SectionStyled>
        </ComponentContainer>
    )
}