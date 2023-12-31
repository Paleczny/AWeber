import React, {useState} from 'react';
import {styled} from 'styled-components';

import Requirements from '../passwordRequirements/PasswordRequirements';

const SectionStyled = styled.section`
  padding-left: 25px;
  display: flex;
  justify-content: center;
`

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 300px;
  grid-gap: 30px;
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 0;
`

const LabelInputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({marginbottom}) => marginbottom}
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

    const passwordsAreEqual = passwordForm.password === passwordForm.confirmPassword;

    const [passwordRequirements, setPasswordRequirements] = useState({
        number: {
            valid: false,
            regex: /\d/g,
            requirementMessage: 'A number',
        },
        upperCase: {
            valid: false,
            regex: /[A-Z]/g,
            requirementMessage: 'A uppercase character',
        },
        lowerCase: {
            valid: false,
            regex: /[a-z]/g,
            requirementMessage: 'A lowercase character',
        },
        minLength: {
            valid: false,
            regex: /^.{6,}$/g,
            requirementMessage: 'At least 6 characters',
        },
        special: {
            valid: false,
            regex: /[!@#$%^&*()_/\-+={\[\]}|:;"'<,>.]/g,
            requirementMessage: 'A special character (!@#$%^&*()_-+={[}]|:;"\'<,>.)',
        }
    });

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

        setPasswordRequirements(pves => {
            let allValid = true;
            const newPves =  Object.keys(pves).map(pve => {
                const valid =  !!passwordForm.password.match(pves[pve].regex)
                if(!valid){
                    allValid = false;
                }
                return {
                    ...pves[pve],
                    valid
                }
            });

            if(allValid){
                alert("Success!")
            }

            return newPves;
        });
    }

    function isSubmitDisabled() {
        const {password, confirmPassword} = passwordForm;
        const empty = !confirmPassword || !password;

        return empty || !passwordsAreEqual;
    }

    return (
        <ComponentContainer>
            <SectionStyled>
                <Requirements passwordRequirements={passwordRequirements}/>
            </SectionStyled>
            <SectionStyled>
                <FormStyled onSubmit={handleOnSubmit}>
                    <LabelInputContainerStyled>
                        <label htmlFor='password'>Password</label>
                        <input name='password'
                               value={passwordForm.password}
                               onChange={handleOnPasswordFormChange}
                               id='password'
                               type='password'>
                        </input>
                    </LabelInputContainerStyled>
                    <LabelInputContainerStyled marginbottom={passwordsAreEqual ? '48px' : '0px'}>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            value={passwordForm.confirmPassword}
                            onChange={handleOnPasswordFormChange}
                            type='password'>
                        </input>
                    </LabelInputContainerStyled>
                    {!passwordsAreEqual && <label>Passwords do not match</label>}
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