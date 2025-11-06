# Contributing to Shinobi Legacy

First off, thank you for considering contributing to Shinobi Legacy! It's people like you that make this game great.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Be patient with others
- Accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Note your browser and OS version**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List some examples of how it would be used**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints
5. Update documentation as needed
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js 16+
- npm or yarn
- Git

### Setup Steps

```bash
# Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/shinobi-legacy.git
cd shinobi-legacy

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/my-new-feature

# Start development server
npm run dev
```

## Coding Standards

### JavaScript/React

- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Keep components small and focused

### CSS/Styling

- Use TailwindCSS utility classes when possible
- Follow mobile-first approach
- Maintain consistent spacing and sizing
- Use CSS variables for theme colors

### Git Commit Messages

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues and pull requests after the first line

Examples:
```
Add battle animation system
Fix inventory item duplication bug
Update README with installation steps
```

### Branch Naming

- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

Examples:
```
feature/add-pvp-arena
bugfix/fix-jutsu-cooldown
docs/update-api-reference
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── pages/         # Page components
├── store/         # State management
├── utils/         # Utility functions
├── data/          # Game data (JSON)
├── hooks/         # Custom React hooks
└── styles/        # Global styles
```

## Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Documentation

- Keep README.md up to date
- Document new features in appropriate files
- Update API documentation if applicable
- Add inline comments for complex logic

## Community

- Join our Discord server
- Follow us on Twitter
- Check out our roadmap
- Participate in discussions

## Questions?

Feel free to reach out to the maintainers:

- Open an issue
- Ask in Discord
- Email: dev@shinobi-legacy.com

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Shinobi Legacy! 🥷✨
