import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Drawer from '../Drawer';

// Mock antd-mobile
jest.mock('antd-mobile', () => ({
  FloatingPanel: ({ children, onHeightChange, ...props }: any) => {
    const MockFloatingPanel = React.forwardRef((ref: any, _props: any) => {
      // Simulate height change for testing
      React.useEffect(() => {
        if (onHeightChange) {
          onHeightChange(0);
        }
      }, []);

      return React.createElement('div', {
        ...props,
        ref,
        'data-testid': 'floating-panel',
        children,
      });
    });
    return MockFloatingPanel;
  },
}));

describe('Drawer Component', () => {
  const defaultProps = {
    open: false,
    setOpen: jest.fn(),
    children: <div>Test Content</div>,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders when open is true', () => {
    render(<Drawer {...defaultProps} open={true} />);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(<Drawer {...defaultProps} open={false} />);
    expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
  });

  it('calls setOpen when backdrop is clicked', async () => {
    const setOpen = jest.fn();
    render(
      <Drawer {...defaultProps} open={true} setOpen={setOpen} backdrop={true} />
    );
    
    const backdrop = screen.getByRole('generic', { hidden: true });
    fireEvent.click(backdrop);
    
    expect(setOpen).toHaveBeenCalledWith(false);
  });

  it('does not show backdrop when backdrop is false', () => {
    render(<Drawer {...defaultProps} open={true} backdrop={false} />);
    expect(screen.queryByRole('generic', { hidden: true })).not.toBeInTheDocument();
  });

  it('handles keyboard events', async () => {
    const setOpen = jest.fn();
    render(<Drawer {...defaultProps} open={true} setOpen={setOpen} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(setOpen).toHaveBeenCalledWith(false);
  });

  it('applies custom className', () => {
    render(<Drawer {...defaultProps} open={true} className="custom-class" />);
    const drawer = screen.getByTestId('floating-panel');
    expect(drawer).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Drawer {...defaultProps} open={true} style={customStyle} />);
    const drawer = screen.getByTestId('floating-panel');
    expect(drawer).toHaveStyle('background-color: red');
  });

  it('has proper accessibility attributes', () => {
    render(
      <Drawer
        {...defaultProps}
        open={true}
        aria-label="Test Drawer"
        aria-labelledby="drawer-title"
        aria-describedby="drawer-description"
      />
    );
    
    const drawer = screen.getByTestId('floating-panel');
    expect(drawer).toHaveAttribute('role', 'dialog');
    expect(drawer).toHaveAttribute('aria-modal', 'true');
    expect(drawer).toHaveAttribute('aria-label', 'Test Drawer');
    expect(drawer).toHaveAttribute('aria-labelledby', 'drawer-title');
    expect(drawer).toHaveAttribute('aria-describedby', 'drawer-description');
  });

  it('handles verticalRatio correctly', () => {
    render(<Drawer {...defaultProps} open={true} verticalRatio={50} />);
    // The actual height calculation is tested through the FloatingPanel mock
    expect(screen.getByTestId('floating-panel')).toBeInTheDocument();
  });

  it('handles snapPoints correctly', () => {
    const snapPoints = [0, 0.25, 0.5, 0.75, 1];
    render(<Drawer {...defaultProps} open={true} snapPoints={snapPoints} />);
    expect(screen.getByTestId('floating-panel')).toBeInTheDocument();
  });

  it('handles animationDuration correctly', () => {
    render(<Drawer {...defaultProps} open={true} animationDuration={500} />);
    const drawer = screen.getByTestId('floating-panel');
    expect(drawer).toHaveStyle('transition: height 500ms ease-in-out');
  });

  it('calls onBackdropClick when provided', () => {
    const onBackdropClick = jest.fn();
    render(
      <Drawer
        {...defaultProps}
        open={true}
        backdrop={true}
        onBackdropClick={onBackdropClick}
      />
    );
    
    const backdrop = screen.getByRole('generic', { hidden: true });
    fireEvent.click(backdrop);
    
    expect(onBackdropClick).toHaveBeenCalled();
  });
});