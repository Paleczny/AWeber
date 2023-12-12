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
    })

    function handleOnPasswordFormChange(event) {
        event.preventDefault()
        setPasswordForm(passwordForm => {
            return {
                ...passwordForm,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleOnSubmit() {
        console.log('clicked');
    }

    function isSubmitDisabled() {
        return !passwordForm.confirmPassword || !passwordForm.password
    }

    return (
        <ComponentContainer>
            <SectionStyled>
                <Requirements/>
            </SectionStyled>
            <SectionStyled>
                <FormStyled>
                    <LabelInputContainerStyled>
                        <label htmlFor='password'>Password</label>
                        <input name='password'
                               value={passwordForm.password}
                               onChange={handleOnPasswordFormChange}
                               id='password'
                               type='password'>
                        </input>
                    </LabelInputContainerStyled>
                    <LabelInputContainerStyled>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            value={passwordForm.confirmPassword}
                            onChange={handleOnPasswordFormChange}
                            type='password'>
                        </input>
                    </LabelInputContainerStyled>
                    <LabelInputContainerStyled>
                        <SubmitButtonStyled
                            onClick={handleOnSubmit}
                            data-testid='button'
                            disabled={isSubmitDisabled()}
                            type='button'>
                            Submit
                        </SubmitButtonStyled>
                    </LabelInputContainerStyled>
                </FormStyled>
            </SectionStyled>
        </ComponentContainer>
    )
}