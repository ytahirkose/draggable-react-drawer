# 🎯 Draggable React Drawer

[![npm version](https://badge.fury.io/js/draggable-react-drawer.svg)](https://badge.fury.io/js/draggable-react-drawer)
[![React](https://img.shields.io/badge/React-18%2B%20%7C%2019-blue.svg)](https://reactjs.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/draggable-react-drawer)](https://bundlephobia.com/result?p=draggable-react-drawer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/ytahirkose/draggable-react-drawer/workflows/CI/badge.svg)](https://github.com/ytahirkose/draggable-react-drawer/actions)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

A modern, accessible, and highly customizable draggable drawer component for React applications. Perfect for mobile-first designs, filter panels, forms, and modal-like experiences.

## ✨ Features

- 🎯 **TypeScript Support** - Full type safety and IntelliSense
- 📱 **Mobile-First Design** - Optimized for touch interactions
- ♿ **Accessibility** - ARIA attributes, keyboard navigation, focus management
- 🎨 **Customizable** - Snap points, animations, backdrop, and styling
- 🚀 **Lightweight** - Small bundle size with zero dependencies
- 🧪 **Well Tested** - Comprehensive test coverage
- 📦 **Tree Shakeable** - ES modules support
- 🎭 **Multiple Positions** - Bottom, top, left, right drawer support
- ⚡ **React 19 Ready** - Optimized for React 19 with concurrent features
- 🔄 **Concurrent Rendering** - Uses startTransition for smooth animations

## 📦 Installation

```bash
npm install draggable-react-drawer
# or
yarn add draggable-react-drawer
# or
pnpm add draggable-react-drawer
```

## 🚀 Quick Start

```tsx
import React, { useState } from 'react';
import { Drawer } from 'draggable-react-drawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>
      
      <Drawer 
        open={isOpen} 
        setOpen={setIsOpen}
        verticalRatio={75}
        snapPoints={[0, 0.25, 0.5, 0.75, 1]}
        backdrop={true}
        keyboardAware={true}
      >
        <div style={{ padding: '20px' }}>
          <h2>Drawer Content</h2>
          <p>This is a draggable drawer!</p>
        </div>
      </Drawer>
    </div>
  );
}
```

## 📚 API Reference

### DrawerProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | **Required.** Controls drawer visibility |
| `setOpen` | `(open: boolean) => void` | - | **Required.** Function to control drawer state |
| `children` | `ReactNode` | - | **Required.** Content to render inside drawer |
| `verticalRatio` | `number` | `100` | Height ratio (1-100) of the drawer |
| `snapPoints` | `number[]` | `[0, 0.25, 0.5, 0.75, 1]` | Snap points for drawer positioning |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |
| `backdrop` | `boolean` | `true` | Show backdrop overlay |
| `onBackdropClick` | `() => void` | - | Callback when backdrop is clicked |
| `keyboardAware` | `boolean` | `true` | Adjust position when keyboard appears |
| `className` | `string` | `''` | Additional CSS class name |
| `style` | `CSSProperties` | `{}` | Inline styles |
| `aria-label` | `string` | - | Accessibility label |
| `aria-labelledby` | `string` | - | ID of element that labels the drawer |
| `aria-describedby` | `string` | - | ID of element that describes the drawer |
| `unstable_useFormStatus` | `boolean` | - | React 19: Enable form status integration |
| `unstable_useFormState` | `boolean` | - | React 19: Enable form state integration |

## 🎨 Examples

### Basic Usage

```tsx
<Drawer open={isOpen} setOpen={setIsOpen}>
  <div>Your content here</div>
</Drawer>
```

### Custom Height and Snap Points

```tsx
<Drawer 
  open={isOpen} 
  setOpen={setIsOpen}
  verticalRatio={60}
  snapPoints={[0, 0.3, 0.6, 1]}
>
  <div>Custom height drawer</div>
</Drawer>
```

### Without Backdrop

```tsx
<Drawer 
  open={isOpen} 
  setOpen={setIsOpen}
  backdrop={false}
>
  <div>No backdrop drawer</div>
</Drawer>
```

### Custom Styling

```tsx
<Drawer 
  open={isOpen} 
  setOpen={setIsOpen}
  className="my-custom-drawer"
  style={{ 
    backgroundColor: '#f0f0f0',
    borderRadius: '20px 20px 0 0'
  }}
>
  <div>Styled drawer</div>
</Drawer>
```

### Accessibility Features

```tsx
<Drawer 
  open={isOpen} 
  setOpen={setIsOpen}
  aria-label="Settings Panel"
  aria-labelledby="settings-title"
  aria-describedby="settings-description"
>
  <h2 id="settings-title">Settings</h2>
  <p id="settings-description">Configure your preferences</p>
  <div>Settings content...</div>
</Drawer>
```

### React 19 Features

```tsx
<Drawer 
  open={isOpen} 
  setOpen={setIsOpen}
  unstable_useFormStatus={true}
  unstable_useFormState={true}
>
  <form>
    <input name="email" type="email" />
    <button type="submit">Submit</button>
  </form>
</Drawer>
```

## 🎯 Use Cases

- **Mobile Navigation** - Slide-out menus and navigation panels
- **Filter Panels** - Product filters, search options
- **Forms** - Multi-step forms, checkout flows
- **Settings** - User preferences, configuration panels
- **Media Galleries** - Image/video viewers with controls
- **Notifications** - Toast messages, alerts

## ♿ Accessibility

This component follows WCAG 2.1 guidelines and includes:

- **Keyboard Navigation** - ESC key to close, Tab navigation
- **Screen Reader Support** - Proper ARIA attributes
- **Focus Management** - Focus trapping and restoration
- **High Contrast** - Supports system preferences
- **Reduced Motion** - Respects user preferences

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development
npm run build:dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build
```

## 📊 Bundle Size

- **Minified**: ~2.5KB gzipped
- **With Dependencies**: ~15KB gzipped (includes antd-mobile)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [antd-mobile](https://mobile.ant.design/) FloatingPanel
- Inspired by modern mobile app patterns
- Community feedback and contributions

## 🔗 Links

- [GitHub Repository](https://github.com/ytahirkose/draggable-react-drawer)
- [NPM Package](https://www.npmjs.com/package/draggable-react-drawer)
- [Live Demo](https://ytahirkose.github.io/draggable-react-drawer) (Coming Soon)
- [Storybook](https://ytahirkose.github.io/draggable-react-drawer/storybook) (Coming Soon)

---

Made with ❤️ by [Yaşar Tahir Köse](https://github.com/ytahirkose)