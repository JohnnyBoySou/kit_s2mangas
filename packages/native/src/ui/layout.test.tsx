import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { Column, Row, Main, ScrollHorizontal, ScrollVertical } from './layout';

describe('Layout Components', () => {
  describe('Column', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <Column testID="column">
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with custom justify and align', () => {
      const { getByTestId } = render(
        <Column testID="column" justify="center" align="center">
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with margin props', () => {
      const { getByTestId } = render(
        <Column testID="column" mh={10} mv={20}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with individual margin props', () => {
      const { getByTestId } = render(
        <Column testID="column" mt={10} mb={20} ml={5} mr={15}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with padding props', () => {
      const { getByTestId } = render(
        <Column testID="column" ph={10} pv={20}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with individual padding props', () => {
      const { getByTestId } = render(
        <Column testID="column" pt={10} pb={20} pl={5} pr={15}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with gap props', () => {
      const { getByTestId } = render(
        <Column testID="column" gv={10} gh={20}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'red' };
      const { getByTestId } = render(
        <Column testID="column" style={customStyle}>
          <Text>Test Content</Text>
        </Column>
      );
      
      expect(getByTestId('column')).toBeTruthy();
    });
  });

  describe('Row', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <Row testID="row">
          <Text>Test Content</Text>
        </Row>
      );
      
      expect(getByTestId('row')).toBeTruthy();
    });

    it('renders with custom justify and align', () => {
      const { getByTestId } = render(
        <Row testID="row" justify="space-between" align="flex-start">
          <Text>Test Content</Text>
        </Row>
      );
      
      expect(getByTestId('row')).toBeTruthy();
    });

    it('renders with margin and padding props', () => {
      const { getByTestId } = render(
        <Row testID="row" mh={10} mv={20} ph={5} pv={15}>
          <Text>Test Content</Text>
        </Row>
      );
      
      expect(getByTestId('row')).toBeTruthy();
    });

    it('renders with gap props', () => {
      const { getByTestId } = render(
        <Row testID="row" gv={10} gh={20}>
          <Text>Test Content</Text>
        </Row>
      );
      
      expect(getByTestId('row')).toBeTruthy();
    });
  });

  describe('Main', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <Main testID="main">
          <Text>Test Content</Text>
        </Main>
      );
      
      expect(getByTestId('main')).toBeTruthy();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'blue' };
      const { getByTestId } = render(
        <Main testID="main" style={customStyle}>
          <Text>Test Content</Text>
        </Main>
      );
      
      expect(getByTestId('main')).toBeTruthy();
    });

    it('renders default content when no children provided', () => {
      const { getByTestId, getByText } = render(
        <Main testID="main" />
      );
      
      expect(getByTestId('main')).toBeTruthy();
      expect(getByText('Hello World')).toBeTruthy();
    });
  });

  describe('ScrollHorizontal', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <ScrollHorizontal testID="scroll-horizontal">
          <Text>Test Content</Text>
        </ScrollHorizontal>
      );
      
      expect(getByTestId('scroll-horizontal')).toBeTruthy();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'green' };
      const { getByTestId } = render(
        <ScrollHorizontal testID="scroll-horizontal" style={customStyle}>
          <Text>Test Content</Text>
        </ScrollHorizontal>
      );
      
      expect(getByTestId('scroll-horizontal')).toBeTruthy();
    });

    it('renders with paging enabled', () => {
      const { getByTestId } = render(
        <ScrollHorizontal testID="scroll-horizontal" pagingEnabled={true}>
          <Text>Test Content</Text>
        </ScrollHorizontal>
      );
      
      expect(getByTestId('scroll-horizontal')).toBeTruthy();
    });

    it('renders with content container style', () => {
      const contentStyle = { padding: 20 };
      const { getByTestId } = render(
        <ScrollHorizontal testID="scroll-horizontal" contentContainerStyle={contentStyle}>
          <Text>Test Content</Text>
        </ScrollHorizontal>
      );
      
      expect(getByTestId('scroll-horizontal')).toBeTruthy();
    });
  });

  describe('ScrollVertical', () => {
    it('renders with default props', () => {
      const { getByTestId } = render(
        <ScrollVertical testID="scroll-vertical">
          <Text>Test Content</Text>
        </ScrollVertical>
      );
      
      expect(getByTestId('scroll-vertical')).toBeTruthy();
    });

    it('renders with custom style', () => {
      const customStyle = { backgroundColor: 'yellow' };
      const { getByTestId } = render(
        <ScrollVertical testID="scroll-vertical" style={customStyle}>
          <Text>Test Content</Text>
        </ScrollVertical>
      );
      
      expect(getByTestId('scroll-vertical')).toBeTruthy();
    });

    it('renders with content container style', () => {
      const contentStyle = { padding: 20 };
      const { getByTestId } = render(
        <ScrollVertical testID="scroll-vertical" contentContainerStyle={contentStyle}>
          <Text>Test Content</Text>
        </ScrollVertical>
      );
      
      expect(getByTestId('scroll-vertical')).toBeTruthy();
    });
  });
});