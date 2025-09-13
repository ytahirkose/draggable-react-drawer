import { ReactNode, RefObject } from 'react';

export interface DrawerProps {
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  verticalRatio?: number;
  snapPoints?: number[];
  animationDuration?: number;
  backdrop?: boolean;
  onBackdropClick?: () => void;
  keyboardAware?: boolean;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  // React 19 specific props
  unstable_useFormStatus?: boolean;
  unstable_useFormState?: boolean;
}

export interface DrawerRef {
  open: boolean;
  setHeight: (height: number) => void;
}

export type SnapPoint = number | 'auto';

export interface DrawerState {
  isOpen: boolean;
  currentHeight: number;
  isDragging: boolean;
}
