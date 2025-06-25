# AI-Ding Development Guide

This guide covers how to develop, test, and contribute to the AI-Ding Chrome Extension.

## 🛠️ Development Setup

### Prerequisites
- Google Chrome (version 88+)
- Text editor or IDE (VS Code recommended)
- Basic knowledge of JavaScript, HTML, CSS
- Understanding of Chrome Extension APIs

### Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension.git
   cd AI-Ding-Chrome-Extension
   ```

2. Load the extension in Chrome:
   - Open `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project folder

3. Make changes to the code
4. Reload the extension in Chrome to test changes

## 📁 Project Structure

```
ai-ding-extension/
├── manifest.json                 # Extension manifest (entry point)
├── background.js                 # Service worker (background script)
├── popup.html                    # Extension popup UI
├── popup.js                      # Popup functionality
├── styles.css                    # Popup styling
├── src/
│   ├── utils/
│   │   └── notificationUtils.js  # Shared notification logic
│   └── platforms/                # Platform-specific detectors
│       ├── boltNewDetector.js    # Bolt.new detection
│       ├── chatGPTDetector.js    # ChatGPT detection
│       ├── claudeDetector.js     # Claude detection
│       ├── dalleDetector.js      # DALL-E detection
│       ├── geminiDetector.js     # Gemini detection
│       ├── githubCopilotDetector.js # GitHub Copilot detection
│       ├── loveableDetector.js   # Loveable detection
│       └── midjourneyDetector.js # Midjourney detection
├── sounds/                       # Built-in notification sounds
├── icons/                        # Extension icons
└── docs/                         # Documentation
```

## 🔧 Key Components

### 1. Manifest (manifest.json)
- Defines extension metadata, permissions, and entry points
- Specifies which content scripts run on which domains
- Configures the popup and background script

### 2. Background Script (background.js)
- Service worker that handles notifications
- Manages extension lifecycle
- Communicates with content scripts

### 3. Content Scripts (src/platforms/*.js)
- Injected into web pages to detect AI completion
- Each platform has its own detector
- Uses MutationObserver to watch for DOM changes

### 4. Popup (popup.html + popup.js)
- Extension settings interface
- Handles user preferences
- Provides sound testing functionality

### 5. Notification Utils (src/utils/notificationUtils.js)
- Shared logic for playing sounds and showing notifications
- Manages user settings
- Handles communication between components

## 🎯 Adding New Platform Support

To add support for a new AI platform:

1. **Create a new detector file**:
   ```javascript
   // src/platforms/newPlatformDetector.js
   class NewPlatformDetector {
     constructor() {
       this.waitForNotificationManager().then(() => {
         this.init();
       });
     }

     async waitForNotificationManager() {
       while (!window.aiDingNotificationManager) {
         await new Promise(resolve => setTimeout(resolve, 100));
       }
       this.notificationManager = window.aiDingNotificationManager;
     }

     init() {
       this.setupObserver();
     }

     setupObserver() {
       const observer = new MutationObserver((mutations) => {
         // Detect when AI response completes
         if (this.isResponseComplete()) {
           this.notificationManager.handleCompletion('New Platform');
         }
       });

       observer.observe(document.body, {
         childList: true,
         subtree: true,
         attributes: true
       });
     }

     isResponseComplete() {
       // Platform-specific logic to detect completion
       return false;
     }
   }

   // Initialize when DOM is ready
   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', () => {
       new NewPlatformDetector();
     });
   } else {
     new NewPlatformDetector();
   }
   ```

2. **Update manifest.json**:
   ```json
   {
     "content_scripts": [
       {
         "matches": ["https://newplatform.com/*"],
         "js": [
           "src/utils/notificationUtils.js",
           "src/platforms/newPlatformDetector.js"
         ],
         "run_at": "document_end"
       }
     ]
   }
   ```

3. **Update the popup UI** to include the new platform in the supported platforms list.

## 🧪 Testing

### Manual Testing
1. Load the extension in Chrome
2. Visit supported AI platforms
3. Trigger AI responses
4. Verify notifications work correctly

### Testing Checklist
- [ ] Sound notifications play correctly
- [ ] Volume control works
- [ ] Custom sounds can be uploaded and played
- [ ] Popup notifications appear (if enabled)
- [ ] Settings persist across browser sessions
- [ ] Extension works on all supported platforms
- [ ] No console errors in background script or content scripts

### Debugging
1. **Content Script Issues**:
   - Open DevTools on the AI platform page
   - Check Console for errors
   - Use `console.log()` for debugging

2. **Background Script Issues**:
   - Go to `chrome://extensions/`
   - Click "Inspect views: background page"
   - Check Console for errors

3. **Popup Issues**:
   - Right-click the extension icon
   - Select "Inspect popup"
   - Check Console for errors

## 🔍 Detection Strategies

### Common Patterns
1. **Button State Changes**: Look for "Stop" → "Send" button transitions
2. **Loading Indicators**: Watch for spinners or "thinking" animations to disappear
3. **Message Completion**: Detect when new assistant messages are fully rendered
4. **Typing Cursors**: Watch for blinking cursors to disappear

### Best Practices
- Use multiple indicators for reliability
- Implement throttling to prevent duplicate notifications
- Handle edge cases (network errors, page navigation)
- Test with different response lengths and types

## 📝 Code Style

### JavaScript
- Use ES6+ features
- Prefer `const` and `let` over `var`
- Use descriptive variable names
- Add comments for complex logic
- Handle errors gracefully

### CSS
- Use consistent naming conventions
- Organize styles logically
- Use CSS custom properties for theming
- Ensure responsive design

## 🚀 Release Process

1. **Update Version**:
   - Increment version in `manifest.json`
   - Update `CHANGELOG.md`

2. **Test Thoroughly**:
   - Test on all supported platforms
   - Verify all features work
   - Check for console errors

3. **Create Release**:
   - Tag the commit: `git tag v1.0.1`
   - Push tags: `git push --tags`
   - Create GitHub release with changelog

## 🤝 Contributing

### Pull Request Process
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Test thoroughly
5. Commit with descriptive messages
6. Push to your fork
7. Create a pull request

### Commit Messages
Use conventional commit format:
- `feat: add support for new AI platform`
- `fix: resolve notification timing issue`
- `docs: update installation guide`
- `refactor: improve detection logic`

## 📚 Resources

### Chrome Extension APIs
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Content Scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)
- [Service Workers](https://developer.chrome.com/docs/extensions/mv3/service_workers/)

### Web APIs
- [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)

## 🐛 Common Issues

### Extension Context Invalidated
- Happens when extension is reloaded during development
- Content scripts lose connection to background script
- Solution: Reload the web page after reloading extension

### Notification Not Playing
- Check browser sound permissions
- Verify audio file URLs are correct
- Test with different audio formats

### Detection Not Working
- Check if selectors match current page structure
- Verify MutationObserver is set up correctly
- Add more specific detection logic

---

**Happy coding! 🎉**