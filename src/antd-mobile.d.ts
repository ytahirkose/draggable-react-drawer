declare module 'antd-mobile' {
  import { ReactNode, RefObject } from 'react';

  export interface FloatingPanelProps {
    children: ReactNode;
    onHeightChange?: (height: number) => void;
    anchors?: number[];
    ref?: RefObject<any>;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }

  export interface FloatingPanelRef {
    open: boolean;
    setHeight: (height: number) => void;
  }

  export const FloatingPanel: React.ForwardRefExoticComponent<
    FloatingPanelProps & React.RefAttributes<any>
  >;
}
