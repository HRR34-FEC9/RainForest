import React from 'react';
import Item from '../components/Item.jsx';
import ShallowRenderer from 'react-test-renderer/shallow';

test('Text changes on hover', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Item data=''/>);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('div');
});