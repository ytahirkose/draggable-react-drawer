import React, { useState } from 'react';
import { Drawer } from 'draggable-react-drawer';

const App: React.FC = () => {
  const [basicOpen, setBasicOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [noBackdropOpen, setNoBackdropOpen] = useState(false);
  const [styledOpen, setStyledOpen] = useState(false);
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <h1>🎯 Draggable React Drawer</h1>
        <p>Modern, accessible, and highly customizable drawer component for React</p>
      </header>

      <div className="demo-grid">
        <div className="demo-card">
          <h3>Basic Usage</h3>
          <p>Simple drawer with default settings. Drag to resize or swipe down to close.</p>
          <button 
            className="button" 
            onClick={() => setBasicOpen(true)}
          >
            Open Basic Drawer
          </button>
        </div>

        <div className="demo-card">
          <h3>Custom Height & Snap Points</h3>
          <p>Drawer with custom height (60%) and custom snap points for better control.</p>
          <button 
            className="button" 
            onClick={() => setCustomOpen(true)}
          >
            Open Custom Drawer
          </button>
        </div>

        <div className="demo-card">
          <h3>No Backdrop</h3>
          <p>Drawer without backdrop overlay. Click outside won't close it.</p>
          <button 
            className="button" 
            onClick={() => setNoBackdropOpen(true)}
          >
            Open No-Backdrop Drawer
          </button>
        </div>

        <div className="demo-card">
          <h3>Custom Styling</h3>
          <p>Drawer with custom styling and rounded corners for a modern look.</p>
          <button 
            className="button" 
            onClick={() => setStyledOpen(true)}
          >
            Open Styled Drawer
          </button>
        </div>

        <div className="demo-card">
          <h3>Accessibility Features</h3>
          <p>Drawer with full accessibility support including ARIA attributes and keyboard navigation.</p>
          <button 
            className="button" 
            onClick={() => setAccessibilityOpen(true)}
          >
            Open Accessible Drawer
          </button>
        </div>

        <div className="demo-card">
          <h3>Multiple Drawers</h3>
          <p>You can have multiple drawers open at the same time. Try opening several!</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button 
              className="button" 
              onClick={() => setBasicOpen(true)}
              style={{ flex: 1 }}
            >
              Drawer 1
            </button>
            <button 
              className="button" 
              onClick={() => setCustomOpen(true)}
              style={{ flex: 1 }}
            >
              Drawer 2
            </button>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>✨ Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <span className="emoji">🎯</span>
            <span>TypeScript Support</span>
          </div>
          <div className="feature-item">
            <span className="emoji">📱</span>
            <span>Mobile-First Design</span>
          </div>
          <div className="feature-item">
            <span className="emoji">♿</span>
            <span>Accessibility</span>
          </div>
          <div className="feature-item">
            <span className="emoji">🎨</span>
            <span>Customizable</span>
          </div>
          <div className="feature-item">
            <span className="emoji">🚀</span>
            <span>Lightweight</span>
          </div>
          <div className="feature-item">
            <span className="emoji">🧪</span>
            <span>Well Tested</span>
          </div>
          <div className="feature-item">
            <span className="emoji">📦</span>
            <span>Tree Shakeable</span>
          </div>
          <div className="feature-item">
            <span className="emoji">⌨️</span>
            <span>Keyboard Navigation</span>
          </div>
        </div>
      </div>

      {/* Basic Drawer */}
      <Drawer 
        open={basicOpen} 
        setOpen={setBasicOpen}
        aria-label="Basic Drawer"
      >
        <div className="drawer-content">
          <h2>Basic Drawer</h2>
          <p>This is a basic drawer with default settings. You can drag it up and down to resize, or swipe down to close it.</p>
          <p>Try dragging the drawer to different heights!</p>
          <button onClick={() => setBasicOpen(false)}>Close Drawer</button>
        </div>
      </Drawer>

      {/* Custom Drawer */}
      <Drawer 
        open={customOpen} 
        setOpen={setCustomOpen}
        verticalRatio={60}
        snapPoints={[0, 0.2, 0.4, 0.6, 0.8, 1]}
        animationDuration={400}
        aria-label="Custom Drawer"
      >
        <div className="drawer-content">
          <h2>Custom Drawer</h2>
          <p>This drawer has custom height (60%) and custom snap points. Notice how it snaps to different positions as you drag it.</p>
          <p>Snap points: 0%, 20%, 40%, 60%, 80%, 100%</p>
          <button onClick={() => setCustomOpen(false)}>Close Drawer</button>
        </div>
      </Drawer>

      {/* No Backdrop Drawer */}
      <Drawer 
        open={noBackdropOpen} 
        setOpen={setNoBackdropOpen}
        backdrop={false}
        aria-label="No Backdrop Drawer"
      >
        <div className="drawer-content">
          <h2>No Backdrop Drawer</h2>
          <p>This drawer doesn't have a backdrop. Clicking outside won't close it - you need to use the close button or drag it down completely.</p>
          <button onClick={() => setNoBackdropOpen(false)}>Close Drawer</button>
        </div>
      </Drawer>

      {/* Styled Drawer */}
      <Drawer 
        open={styledOpen} 
        setOpen={setStyledOpen}
        className="custom-drawer"
        style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
        }}
        aria-label="Styled Drawer"
      >
        <div className="drawer-content">
          <h2>Styled Drawer</h2>
          <p>This drawer has custom styling with rounded corners and a custom background color.</p>
          <p>You can customize the appearance using the <code>style</code> and <code>className</code> props.</p>
          <button onClick={() => setStyledOpen(false)}>Close Drawer</button>
        </div>
      </Drawer>

      {/* Accessibility Drawer */}
      <Drawer 
        open={accessibilityOpen} 
        setOpen={setAccessibilityOpen}
        aria-label="Accessibility Demo Drawer"
        aria-labelledby="accessibility-title"
        aria-describedby="accessibility-description"
        keyboardAware={true}
      >
        <div className="drawer-content">
          <h2 id="accessibility-title">Accessibility Features</h2>
          <p id="accessibility-description">
            This drawer demonstrates accessibility features including ARIA attributes, 
            keyboard navigation (try pressing ESC), and focus management.
          </p>
          <p>Features included:</p>
          <ul>
            <li>ARIA labels and descriptions</li>
            <li>Keyboard navigation (ESC to close)</li>
            <li>Focus management</li>
            <li>Screen reader support</li>
            <li>High contrast support</li>
          </ul>
          <button onClick={() => setAccessibilityOpen(false)}>Close Drawer</button>
        </div>
      </Drawer>
    </div>
  );
};

export default App;
