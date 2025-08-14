import { forwardRef, ReactNode, useRef, useEffect } from 'react';
import { Modal, View, ScrollView, Pressable, Animated, Dimensions, ViewStyle } from 'react-native';

interface SheetProps {
  children: ReactNode;
  visible: boolean;
  onClose?: () => void;
  snapPoints?: number[];
  testID?: string;
}

const { height: screenHeight } = Dimensions.get('window');

const Sheet = forwardRef<any, SheetProps>(
  ({ children, visible, onClose, snapPoints = [0.1, 300], testID }) => {
    const slideAnim = useRef(new Animated.Value(screenHeight)).current;
    const backdropOpacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (visible) {
        // Animar entrada
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: screenHeight - (snapPoints[1] || 300),
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(backdropOpacity, {
            toValue: 0.5,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start();
      } else {
        // Animar saída
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: screenHeight,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(backdropOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start();
      }
    }, [visible, slideAnim, backdropOpacity, snapPoints]);

    const handleBackdropPress = () => {
      if (onClose) {
        onClose();
      }
    };

    return (
      <Modal
        visible={visible}
        transparent
        animationType="none"
        onRequestClose={onClose}
        testID={testID}
      >
        <View style={{ flex: 1 }}>
          {/* Backdrop */}
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#000',
              opacity: backdropOpacity,
            }}
          >
            <Pressable
              style={{ flex: 1 }}
              onPress={handleBackdropPress}
            />
          </Animated.View>

          {/* Sheet Content */}
          <Animated.View
            style={[
              {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#101010',
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
                zIndex: 99,
              } as ViewStyle,
              {
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            {/* Handle Indicator */}
            <View
              style={{
                width: 70,
                height: 8,
                backgroundColor: '#606060',
                borderRadius: 4,
                alignSelf: 'center',
                marginTop: 12,
                marginBottom: 8,
              }}
            />

            {/* Content */}
            <ScrollView
              style={{ maxHeight: snapPoints[1] || 300 }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {children}
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    );
  }
);

Sheet.displayName = 'Sheet';

export default Sheet;
