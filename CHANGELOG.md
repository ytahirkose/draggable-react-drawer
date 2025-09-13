# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2024-09-14

### Added
- **React 19 Support**: Full compatibility with React 19
- **Concurrent Rendering**: Uses `useTransition` and `startTransition` for smoother animations
- **Form Integration**: Added `unstable_useFormStatus` and `unstable_useFormState` props for React 19 form features
- **Enhanced Performance**: Non-blocking UI updates with React 19's concurrent features
- **Updated Peer Dependencies**: Now supports React 18+ and React 19

### Changed
- **Peer Dependencies**: Updated to support `>=18.0.0 || ^19.0.0`
- **TypeScript Types**: Added React 19 specific type definitions
- **Documentation**: Updated README with React 19 features and examples
- **Demo**: Updated demo to use React 19

### Technical Details
- Uses `startTransition` for drawer state updates
- Optimized rendering with React 19's concurrent features
- Backward compatible with React 18
- Enhanced type safety with React 19 types

## [1.2.11] - 2024-09-13

### Added
- **TypeScript Support**: Full TypeScript implementation
- **Modern Build Setup**: Rollup with ES modules and CommonJS output
- **Test Coverage**: Jest + React Testing Library
- **CI/CD Pipeline**: GitHub Actions workflow
- **Accessibility Features**: ARIA attributes, keyboard navigation, focus management
- **Advanced API**: Snap points, animation control, backdrop options
- **Demo Application**: Interactive Vite-based demo
- **Comprehensive Documentation**: README, CONTRIBUTING, CODE_OF_CONDUCT

### Changed
- **Complete Rewrite**: Migrated from JavaScript to TypeScript
- **Enhanced API**: Added multiple new props and features
- **Improved Performance**: Optimized rendering and animations
- **Better Developer Experience**: Full IntelliSense support

### Fixed
- **Type Safety**: Eliminated runtime type errors
- **Bundle Size**: Optimized build output
- **Cross-browser Compatibility**: Better browser support

## [1.2.10] - Previous versions

### Legacy Features
- Basic draggable drawer functionality
- Antd-mobile integration
- Simple props API
