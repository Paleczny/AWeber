import React from 'react';
import {styled} from 'styled-components';

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

export default function Password() {
    return (
        <SectionStyled>
            <FormStyled>
                <LabelInputContainerStyled>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="password"></input>
                </LabelInputContainerStyled>
                <LabelInputContainerStyled>
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input id='confirmPassword' type="password"></input>
                </LabelInputContainerStyled>
            </FormStyled>
        </SectionStyled>
    )
}