# Changelog

All notable changes to the AI-Ding Chrome Extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-12-19

### Added
- Initial release of AI-Ding Chrome Extension
- Support for 8 major AI platforms:
  - ChatGPT (chat.openai.com, chatgpt.com)
  - Google Gemini (gemini.google.com)
  - Claude (claude.ai)
  - DALL-E (labs.openai.com)
  - GitHub Copilot (github.com)
  - Midjourney (discord.com, midjourney.com)
  - Loveable (loveable.ai)
  - Bolt.new (bolt.new)
- 4 built-in notification sounds (bell, chime, ding, tada)
- Custom sound upload functionality (MP3/WAV, max 1MB)
- Volume control slider (0-100%)
- Desktop popup notifications
- Modern popup interface with settings
- Smart AI completion detection using MutationObserver
- Notification throttling to prevent spam
- Local storage for user preferences
- Privacy-first design (no data collection)

### Technical Features
- Manifest V3 compliance
- Service worker background script
- Content script injection for each platform
- Modular platform detector architecture
- Shared notification utilities
- Error handling and logging
- Extension context management

### Security
- Minimal permissions (activeTab, storage, notifications)
- No external network requests
- Local-only data storage
- No user data collection or transmission

## [Unreleased]

### Planned
- Chrome Web Store publication
- Additional AI platform support
- Enhanced detection algorithms
- User interface improvements
- Performance optimizations

---

## Version Format

- **Major.Minor.Patch** (e.g., 1.0.0)
- **Major**: Breaking changes or significant new features
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, minor improvements

## Categories

- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Removed features
- **Fixed**: Bug fixes
- **Security**: Security improvements