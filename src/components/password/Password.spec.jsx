import { render, screen } from '@testing-library/react';
import React from 'react';
import Password from "./Password";

describe('Password tests', () => {
    beforeEach(() => {
        render(<Password />);
    });

    it('submit button should be disabled', () => {
        expect(screen.getByTestId('button')).toBeDisabled();
    });


});