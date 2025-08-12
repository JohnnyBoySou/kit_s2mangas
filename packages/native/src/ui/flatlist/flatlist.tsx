import React from 'react';
import {
  ViewStyle,
  FlatList as RNFlatList,
  ListRenderItem,
} from 'react-native';

interface CustomFlatListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
  HeaderComponent?: React.ComponentType<any> | React.ReactElement;
  FooterComponent?: React.ComponentType<any> | React.ReactElement;
  EmptyComponent?: React.ComponentType<any> | React.ReactElement;
  LoadingComponent?: React.ComponentType<any> | React.ReactElement;

  loading?: boolean;
  contentContainerStyle?: ViewStyle;
  horizontal?: boolean;
  numColumns?: number;
  columnWrapperStyle?: ViewStyle;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  onRefresh?: () => void;
  refreshing?: boolean;
  paginateEnabled?: boolean;
  estimatedItemSize?: number;
  style?: ViewStyle;
}

export default function FlatList<T>({
  data,
  renderItem,
  EmptyComponent,
  HeaderComponent,
  FooterComponent,
  LoadingComponent,
  loading = false,
  contentContainerStyle,
  horizontal = false,
  numColumns,
  columnWrapperStyle,
  onEndReached,
  onEndReachedThreshold = 0.5,
  estimatedItemSize,
  onRefresh,
  paginateEnabled,
  refreshing = false,
  style,
  keyExtractor = (item: any, index: number) =>
    item?.id?.toString() || index.toString(),
  ...props
}: CustomFlatListProps<T>) {
  if (loading && LoadingComponent) {
    return React.isValidElement(LoadingComponent) ? (
      LoadingComponent
    ) : (
      React.createElement(LoadingComponent as React.ComponentType)
    );
  }

  return (
    <RNFlatList
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={EmptyComponent}
      ListHeaderComponent={HeaderComponent}
      ListFooterComponent={FooterComponent}
      contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
      horizontal={horizontal}
      numColumns={numColumns}
      columnWrapperStyle={columnWrapperStyle}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      onRefresh={onRefresh}
      refreshing={refreshing}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={paginateEnabled}
      style={style}
      getItemLayout={
        estimatedItemSize
          ? (_, index) => ({
              length: estimatedItemSize,
              offset: estimatedItemSize * index,
              index,
            })
          : undefined
      }
      {...props}
    />
  );
}
