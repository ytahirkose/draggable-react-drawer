# Contributing to Draggable React Drawer

Thank you for your interest in contributing to Draggable React Drawer! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/draggable-react-drawer.git
   cd draggable-react-drawer
   ```

3. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Start development**:
   ```bash
   npm run build:dev
   npm run demo
   ```

## 🧪 Testing

We use Jest and React Testing Library for testing. Please ensure all tests pass before submitting a PR.

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 📝 Code Style

We use ESLint for code linting. Please ensure your code follows our style guidelines:

```bash
# Check linting
npm run lint

# Fix linting issues (if possible)
npm run lint -- --fix
```

## 🔧 TypeScript

This project is written in TypeScript. Please ensure:

- All new code is properly typed
- No `any` types unless absolutely necessary
- Type definitions are exported when needed

```bash
# Type check
npm run type-check
```

## 📦 Building

Before submitting a PR, ensure the project builds correctly:

```bash
# Clean previous builds
npm run clean

# Build for production
npm run build
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Clear description** of the issue
2. **Steps to reproduce** the problem
3. **Expected behavior** vs actual behavior
4. **Environment details** (OS, Node version, browser)
5. **Code example** if applicable

## ✨ Feature Requests

For feature requests, please:

1. **Check existing issues** to avoid duplicates
2. **Describe the use case** clearly
3. **Provide examples** of how it would be used
4. **Consider backwards compatibility**

## 🔄 Pull Request Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Add tests** for new functionality

4. **Update documentation** if needed

5. **Run all checks**:
   ```bash
   npm run type-check
   npm run lint
   npm test
   npm run build
   ```

6. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub

## 📋 Pull Request Guidelines

### Title Format
Use conventional commits format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for test additions/changes
- `chore:` for maintenance tasks

### Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or clearly documented)
```

## 🏷️ Issue Labels

We use the following labels for issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

### Expected Behavior

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 📞 Getting Help

If you need help or have questions:

1. **Check the documentation** in the README
2. **Search existing issues** for similar problems
3. **Create a new issue** with the `question` label
4. **Join discussions** in existing issues

## 🎉 Recognition

Contributors will be recognized in:

- README contributors section
- Release notes
- GitHub contributors page

Thank you for contributing to Draggable React Drawer! 🎯
