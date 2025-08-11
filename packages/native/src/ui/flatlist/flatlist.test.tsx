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
      renderItem: mockRenderItem,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders empty component when data is empty', () => {
    const element = React.createElement(FlatList, {
      data: [],
      renderItem: mockRenderItem,
      EmptyComponent: MockEmptyComponent,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toEqual([]);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.EmptyComponent).toBe(MockEmptyComponent);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders header component', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      HeaderComponent: MockHeaderComponent,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.HeaderComponent).toBe(MockHeaderComponent);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders footer component', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      FooterComponent: MockFooterComponent,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.FooterComponent).toBe(MockFooterComponent);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders loading component when loading is true', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      LoadingComponent: MockLoadingComponent,
      loading: true,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.LoadingComponent).toBe(MockLoadingComponent);
    expect(element.props.loading).toBe(true);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with horizontal orientation', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      horizontal: true,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.horizontal).toBe(true);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with multiple columns', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      numColumns: 2,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.numColumns).toBe(2);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with custom key extractor', () => {
    const customKeyExtractor = (item: any, index: number) => `custom-${item.id}`;
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      keyExtractor: customKeyExtractor,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.keyExtractor).toBe(customKeyExtractor);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      style: customStyle,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.style).toBe(customStyle);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with estimated item size', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      estimatedItemSize: 50,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.estimatedItemSize).toBe(50);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with refresh control', () => {
    const mockOnRefresh = jest.fn();
    
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      onRefresh: mockOnRefresh,
      refreshing: false,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.onRefresh).toBe(mockOnRefresh);
    expect(element.props.refreshing).toBe(false);
    expect(element.props.testID).toBe("flatlist");
  });

  it('renders with pagination enabled', () => {
    const element = React.createElement(FlatList, {
      data: mockData,
      renderItem: mockRenderItem,
      paginateEnabled: true,
      testID: "flatlist"
    });
    
    expect(element).toBeDefined();
    expect(element.type).toBe(FlatList);
    expect(element.props.data).toBe(mockData);
    expect(element.props.renderItem).toBe(mockRenderItem);
    expect(element.props.paginateEnabled).toBe(true);
    expect(element.props.testID).toBe("flatlist");
  });
});