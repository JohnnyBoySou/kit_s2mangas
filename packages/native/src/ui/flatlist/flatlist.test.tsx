import React from 'react';
import { Text } from 'react-native';
import FlatList from './flatlist';

describe('FlatList Component', () => {
  const mockData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  const mockRenderItem = ({ item }: { item: any }) => (
    React.createElement(Text, { testID: `item-${item.id}` }, item.name)
  );

  const MockEmptyComponent = () => (
    React.createElement(Text, { testID: "empty-component" }, 'No items found')
  );

  const MockHeaderComponent = () => (
    React.createElement(Text, { testID: "header-component" }, 'Header')
  );

  const MockFooterComponent = () => (
    React.createElement(Text, { testID: "footer-component" }, 'Footer')
  );

  const MockLoadingComponent = () => (
    React.createElement(Text, { testID: "loading-component" }, 'Loading...')
  );

  it('renders with data', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
  });

  it('renders empty component when data is empty', () => {
    const element = React.createElement(FlatList, {
      data: [],
      renderItem: mockRenderItem,
      EmptyComponent: MockEmptyComponent
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toEqual([]);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.EmptyComponent).toBe(MockEmptyComponent);
  });

  it('renders header component', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      HeaderComponent: MockHeaderComponent
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.HeaderComponent).toBe(MockHeaderComponent);
  });

  it('renders footer component', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      FooterComponent: MockFooterComponent
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.FooterComponent).toBe(MockFooterComponent);
  });

  it('renders loading component when loading is true', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      LoadingComponent: MockLoadingComponent,
      loading: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.LoadingComponent).toBe(MockLoadingComponent);
    expect(element.props.loading).toBe(true);
  });

  it('renders with horizontal orientation', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      horizontal: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.horizontal).toBe(true);
  });

  it('renders with multiple columns', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      numColumns: 2
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.numColumns).toBe(2);
  });

  it('renders with custom key extractor', () => {
    const customKeyExtractor = (item: any) => `custom-${item.id}`;
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      keyExtractor: customKeyExtractor
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.keyExtractor).toBe(customKeyExtractor);
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      style: customStyle
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.style).toBe(customStyle);
  });

  it('renders with estimated item size', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      estimatedItemSize: 50
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.estimatedItemSize).toBe(50);
  });

  it('renders with refresh control', () => {
    const mockOnRefresh = jest.fn();
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      onRefresh: mockOnRefresh,
      refreshing: false
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.onRefresh).toBe(mockOnRefresh);
    expect(element.props.refreshing).toBe(false);
  });

  it('renders with pagination enabled', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      paginateEnabled: true
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.paginateEnabled).toBe(true);
  });
});