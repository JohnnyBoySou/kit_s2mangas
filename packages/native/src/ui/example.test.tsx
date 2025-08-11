import React from 'react';
import { render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

it('renderiza texto', () => {
  const Comp = () => (
    <View>
      <Text>Opa</Text>
    </View>
  );
  const { getByText } = render(<Comp />);
  expect(getByText('Opa')).toBeTruthy();
});
