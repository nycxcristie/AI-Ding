# Contributing to AI-Ding Chrome Extension

Thank you for your interest in contributing to AI-Ding! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in [Issues](https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension/issues)
2. If not, create a new issue with:
   - Clear, descriptive title
   - Steps to reproduce the bug
   - Expected vs actual behavior
   - Chrome version and OS
   - Screenshots if applicable

### Suggesting Features
1. Check existing issues for similar suggestions
2. Create a new issue with:
   - Clear description of the feature
   - Use case and benefits
   - Possible implementation approach

### Code Contributions

#### Getting Started
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test thoroughly
6. Commit and push
7. Create a pull request

#### Development Setup
See [DEVELOPMENT.md](DEVELOPMENT.md) for detailed setup instructions.

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] Extension loads without errors
- [ ] Feature works on all supported platforms
- [ ] Documentation is updated if needed
- [ ] CHANGELOG.md is updated

### Pull Request Format
```
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on supported AI platforms
- [ ] No console errors

## Screenshots (if applicable)
```

## 🎯 Areas for Contribution

### High Priority
- **New Platform Support**: Add detection for additional AI platforms
- **Bug Fixes**: Resolve existing issues
- **Performance**: Optimize detection algorithms
- **Accessibility**: Improve UI accessibility

### Medium Priority
- **UI Improvements**: Enhance popup design
- **Documentation**: Improve guides and examples
- **Testing**: Add automated tests
- **Internationalization**: Add multi-language support

### Low Priority
- **Code Refactoring**: Improve code organization
- **Additional Features**: New notification options
- **Browser Support**: Extend to other browsers

## 🔧 Technical Guidelines

### Code Style
- Use ES6+ JavaScript features
- Follow consistent naming conventions
- Add comments for complex logic
- Handle errors gracefully
- Use `console.log` with prefixes for debugging

### Platform Detectors
When adding new platform support:
- Create a new file in `src/platforms/`
- Follow existing detector patterns
- Use multiple detection indicators for reliability
- Test thoroughly with different response types
- Add platform to manifest.json

### Commit Messages
Use conventional commit format:
- `feat: add support for new AI platform`
- `fix: resolve notification timing issue`
- `docs: update installation guide`
- `refactor: improve detection logic`
- `test: add unit tests for notification utils`

## 🧪 Testing Requirements

### Manual Testing Checklist
- [ ] Extension loads without errors
- [ ] Sound notifications work on all platforms
- [ ] Volume control functions correctly
- [ ] Custom sound upload works
- [ ] Popup notifications appear (if enabled)
- [ ] Settings persist across sessions
- [ ] No duplicate notifications
- [ ] Works in incognito mode

### Platform Testing
Test on each supported platform:
- [ ] ChatGPT
- [ ] Google Gemini
- [ ] Claude
- [ ] DALL-E
- [ ] GitHub Copilot
- [ ] Midjourney
- [ ] Loveable
- [ ] Bolt.new

## 📚 Resources

### Documentation
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

### Project Files
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development setup and guidelines
- [README.md](README.md) - Project overview and usage
- [CHANGELOG.md](CHANGELOG.md) - Version history

## 🏆 Recognition

Contributors will be:
- Listed in the project README
- Mentioned in release notes
- Invited to join the core team (for significant contributions)

## 📞 Getting Help

### Questions?
- **GitHub Discussions**: Ask questions and discuss ideas
- **Discord**: [Join our community](https://discord.gg/c6FHz6uw)
- **Email**: aiding.team@gmail.com

### Stuck?
- Check existing issues and discussions
- Review the development guide
- Ask for help in Discord or GitHub

## 🎉 Thank You!

Every contribution, no matter how small, helps make AI-Ding better for everyone. We appreciate your time and effort!

---

**Happy contributing! 🚀**