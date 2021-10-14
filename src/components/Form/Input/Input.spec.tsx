import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Input } from './Input';

describe('Компонент ввода', () => {
  it('снапшот поля ввода', () => {
    const tree = TestRenderer.create(
      <Input value="" onChange={() => undefined} label="Тест" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
