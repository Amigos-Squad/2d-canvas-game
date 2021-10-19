import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Button } from './Button';

describe('Компонент кнопки', () => {
  it('снапшот submit кнопки', () => {
    const tree = TestRenderer.create(
      <Button type="submit">LOGIN</Button>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('снапшот обычной кнопки', () => {
    const tree = TestRenderer.create(<Button>LOGIN</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
