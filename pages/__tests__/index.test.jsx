import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index';

describe('Index component', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Index />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
