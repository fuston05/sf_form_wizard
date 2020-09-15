import React from 'react';
import {render} from '@testing-library/react';

// components
import {Modal} from '../components';

describe('Modal component', () => {

  test('renders to the DOM', () => {
    const {getByTestId}= render(
      <Modal />
    );

    cosnt modal= getByTestId(/modalComponent/i);

  });

});
