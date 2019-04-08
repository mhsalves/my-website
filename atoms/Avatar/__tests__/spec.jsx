import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from '../index';

import withTheme from '../../../bosons/withTheme';

const ComponentWithTheme = withTheme(Avatar);

const src = 'https://via.placeholder.com/320';
const alt = 'Avatar testing';

describe('given: Avatar', () => {
  test('when: is not rounded', () => {
    const component = renderer.create(
      <ComponentWithTheme src={src} alt={alt} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: is rounded', () => {
    const component = renderer.create(
      <ComponentWithTheme src={src} alt={alt} rounded />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
