import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import type { BottomSheetProps } from '@gorhom/bottom-sheet';

export interface SheetProps extends BottomSheetProps {
  children: ReactNode;
  snapPoints?: (number | string)[];
  onClose?: () => void; 
}

const Sheet = forwardRef<BottomSheet, SheetProps>(
  ({ children, snapPoints = [0.1, 300], onClose, ...props }, ref) => {
    return (
      <BottomSheet
        {...props}
        ref={ref}
        snapPoints={snapPoints}
        onClose={onClose} 
        containerStyle={{ zIndex: 99 }}
        backgroundStyle={{
          backgroundColor: '#101010',
          borderRadius: 32,
        }}
        handleIndicatorStyle={{
          backgroundColor: '#606060',
          width: 70,
          height: 8,
        }}
      >
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      </BottomSheet>
    );
  }
);

Sheet.displayName = 'Sheet';

export default Sheet;
