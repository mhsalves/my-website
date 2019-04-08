import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';

import Dropdown from '../index';

import withTheme from '../../../bosons/withTheme';

const ComponentWithTheme = withTheme(Dropdown);
const Content = styled.div`${({ contentStyle }) => contentStyle}`;

const handler = (<button type="button">Click here</button>);
const content = contentProps => (<Content {...contentProps}>Hello World !</Content>);

describe('given: Dropdown', () => {
  test('when: is not opened', () => {
    const component = renderer.create(
      <ComponentWithTheme handler={handler} content={content} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: is opened', () => {
    const component = renderer.create(
      <ComponentWithTheme handler={handler} content={content} isOpen />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
