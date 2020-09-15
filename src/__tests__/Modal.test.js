import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// components
import {Modal} from '../components';
import {TestForm} from './testComponents/';
import {TestButton} from './testComponents';

describe('Modal component', () => {

  test('renders to the DOM', () => {
    const {getByTestId}= render(
      <Modal />
    );

    const modal= getByTestId(/modalComponent/i);
    expect(modal).toBeInTheDocument();
  });

  test('renders child components', () => {
    const {getByText, getByLabelText}= render(
      <Modal>
        <TestForm />
        <TestButton />
      </Modal>
    );
      expect(getByLabelText(/Test Form/i)).toBeInTheDocument();
      expect(getByText(/Test Button/i)).toBeInTheDocument();
  });

});
