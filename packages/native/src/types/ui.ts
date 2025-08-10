import { TextInputProps, View } from 'react-native';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<typeof View> {
  w?: number | string;
  h?: number | string;
  r?: number;
  c?: string;
}

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  mask?: string;
  maskConfig?: MaskConfig;
}

export interface MaskConfig {
  mask: string;
  maskType?: 'number' | 'text' | 'mixed';
}


export interface StyleProps {
  color?: string;
  size?: number;
  weight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export interface TextComponentProps extends StyleProps {
  children: React.ReactNode;
}

export interface CheckProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface CustomMotiTransition {
  type: 'timing';
  duration: number;
}

export interface Option<T> {
  label: string;
  value: T;
}

export interface SelectProps<T> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
}

export interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface MessageProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

export interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface AvatarProps {
  uri?: string;
  size?: number;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface InputOTPProps extends Omit<TextInputProps, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export interface MultiStepProps {
  steps: number;
  currentStep: number;
}

export interface StepProps {
  isActive: boolean;
  isCompleted: boolean;
}

export interface LoaderProps {
  size?: number;
  color?: string;
}

export interface TabsProps {
  tabs: string[];
  activeTab: number;
  onChange: (index: number) => void;
}

export interface ListMangasProps {
  data: any[];
  loading?: boolean;
  onEndReached?: () => void;
} 