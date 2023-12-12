import { render, screen } from '@testing-library/react';
import React from 'react';
import Password from "./Password";

describe('Password tests', () => {
    it('should render the component', () => {
        render(<Password />);
        expect(screen.getByTestId('button')).toBeDisabled();
    });


});