import React from 'react';
import renderer from 'react-test-renderer';

import MenuList from '../index';

import withTheme from '../../../bosons/withTheme';

const ComponentWithTheme = withTheme(MenuList);

const action = jest.fn();
const items = (new Array(5)).fill(null).map((v, i) => ({
  title: `Option ${i}`,
  action,
}));

describe('given: MenuList', () => {
  test('when: is center', () => {
    const component = renderer.create(
      <ComponentWithTheme items={items} centered />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
