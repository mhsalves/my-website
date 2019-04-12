import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../index';

import withTheme from '../../../bosons/withTheme';

const ComponentWithTheme = withTheme(Icon);
const glyph = 'glyph';

describe('given: Icon', () => {
  test('when: has no size', () => {
    const snap = renderer.create(<ComponentWithTheme glyph={glyph} size="base" />).toJSON();
    const defaultSnap = renderer.create(<ComponentWithTheme glyph={glyph} />).toJSON();
    expect(snap).toEqual(defaultSnap);
  });

  test('when: is small', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} size="small" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: is large', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} size="large" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: has color', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} color="primary" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: has color and variant', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} color="coal default" />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: is before a text', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} beforeText />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: has rotation', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} rotate={90} />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });

  test('when: is spinning', () => {
    const component = renderer.create(
      <ComponentWithTheme glyph={glyph} spin />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
