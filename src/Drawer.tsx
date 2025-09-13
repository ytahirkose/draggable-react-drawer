import React, { useEffect, useRef, useCallback, useState, useTransition } from 'react';
import { FloatingPanel } from 'antd-mobile';
import { DrawerProps, DrawerRef, DrawerState } from './types';

const Drawer: React.FC<DrawerProps> = ({
  children,
  open,
  setOpen,
  verticalRatio = 100,
  snapPoints = [0, 0.25, 0.5, 0.75, 1],
  animationDuration = 300,
  backdrop = true,
  onBackdropClick,
  keyboardAware = true,
  className = '',
  style = {},
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}) => {
  const drawerRef = useRef<DrawerRef>(null);
  const [isPending, startTransition] = useTransition();
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    currentHeight: 0,
    isDragging: false,
  });

  // Calculate anchors based on snap points
  const anchors = snapPoints.map(point => 
    typeof point === 'number' ? window.innerHeight * point : window.innerHeight
  );

  // Handle keyboard events
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
    }
  }, [open, setOpen]);

  // Handle backdrop click
  const handleBackdropClick = useCallback(() => {
    if (backdrop && onBackdropClick) {
      onBackdropClick();
    } else if (backdrop) {
      setOpen(false);
    }
  }, [backdrop, onBackdropClick, setOpen]);

  // Handle height changes
  const handleHeightChange = useCallback((height: number) => {
    setDrawerState(prev => ({
      ...prev,
      currentHeight: height,
      isDragging: height > 0 && height < window.innerHeight,
    }));

    // Close drawer if height is 0 and it was open
    if (height === 0 && drawerRef.current?.open) {
      setTimeout(() => {
        if (drawerRef.current) {
          drawerRef.current.open = false;
          setOpen(false);
        }
      }, 1);
    }
  }, [setOpen]);

  // Update drawer when open state changes
  useEffect(() => {
    const updateDrawer = () => {
      if (!drawerRef.current) return;

      let ratio = 1;
      if (verticalRatio > 100) {
        ratio = 1;
      } else if (verticalRatio < 1) {
        ratio = 0.01;
      } else {
        ratio = verticalRatio / 100;
      }

      const targetHeight = open ? window.innerHeight * ratio : 0;
      
      // Use startTransition for non-urgent updates in React 19
      startTransition(() => {
        drawerRef.current?.setHeight(targetHeight);
        drawerRef.current && (drawerRef.current.open = open);
        
        setDrawerState(prev => ({
          ...prev,
          isOpen: open,
          currentHeight: targetHeight,
        }));
      });
    };

    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(updateDrawer);
  }, [open, verticalRatio, startTransition]);

  // Add keyboard event listeners
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [open, handleKeyDown]);

  // Handle keyboard awareness
  useEffect(() => {
    if (!keyboardAware || !open) return;

    const handleResize = () => {
      // Adjust drawer position when keyboard appears
      if (drawerRef.current) {
        const currentHeight = drawerRef.current.open ? window.innerHeight * (verticalRatio / 100) : 0;
        drawerRef.current.setHeight(currentHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [keyboardAware, open, verticalRatio]);

  // Focus management for accessibility
  useEffect(() => {
    if (open && drawerRef.current) {
      // Focus the drawer when it opens
      const drawerElement = drawerRef.current as any;
      if (drawerElement.focus) {
        drawerElement.focus();
      }
    }
  }, [open]);

  const drawerProps = {
    ref: drawerRef,
    onHeightChange: handleHeightChange,
    anchors,
    className: `draggable-react-drawer ${className}`.trim(),
    style: {
      transition: `height ${animationDuration}ms ease-in-out`,
      ...style,
    },
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-hidden': !open,
  };

  return (
    <>
      {open && (
        <>
          {backdrop && (
            <div
              className="draggable-react-drawer-backdrop"
              onClick={handleBackdropClick}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999,
                transition: `opacity ${animationDuration}ms ease-in-out`,
              }}
              aria-hidden="true"
            />
          )}
          <FloatingPanel {...drawerProps}>
            {children}
          </FloatingPanel>
        </>
      )}
    </>
  );
};

export default Drawer;
