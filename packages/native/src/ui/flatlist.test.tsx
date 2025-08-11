import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import FlatList from './flatlist';

describe('FlatList Component', () => {
  const mockData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const mockRenderItem = ({ item }: { item: any }) => (
    <Text testID={`item-${item.id}`}>{item.name}</Text>
  );

  const MockEmptyComponent = () => (
    <Text testID="empty-component">No items found</Text>
  );

  const MockHeaderComponent = () => (
    <Text testID="header-component">Header</Text>
  );

  const MockFooterComponent = () => (
    <Text testID="footer-component">Footer</Text>
  );

  const MockLoadingComponent = () => (
    <Text testID="loading-component">Loading...</Text>
  );

  it('renders with data', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
    expect(getByTestId('item-2')).toBeTruthy();
    expect(getByTestId('item-3')).toBeTruthy();
  });

  it('renders empty component when data is empty', () => {
    const { getByTestId } = render(
      <FlatList
        data={[]}
        renderItem={mockRenderItem}
        EmptyComponent={MockEmptyComponent}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('empty-component')).toBeTruthy();
  });

  it('renders header component', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        HeaderComponent={MockHeaderComponent}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('header-component')).toBeTruthy();
  });

  it('renders footer component', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        FooterComponent={MockFooterComponent}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('footer-component')).toBeTruthy();
  });

  it('renders loading component when loading is true', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        LoadingComponent={MockLoadingComponent}
        loading={true}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('loading-component')).toBeTruthy();
  });

  it('renders with horizontal orientation', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        horizontal={true}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with multiple columns', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        numColumns={2}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with custom key extractor', () => {
    const customKeyExtractor = (item: any, index: number) => `custom-${item.id}`;
    
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        keyExtractor={customKeyExtractor}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        style={customStyle}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with estimated item size', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        estimatedItemSize={50}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with refresh control', () => {
    const mockOnRefresh = jest.fn();
    
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        onRefresh={mockOnRefresh}
        refreshing={false}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });

  it('renders with pagination enabled', () => {
    const { getByTestId } = render(
      <FlatList
        data={mockData}
        renderItem={mockRenderItem}
        paginateEnabled={true}
        testID="flatlist"
      />
    );
    
    expect(getByTestId('item-1')).toBeTruthy();
  });
});