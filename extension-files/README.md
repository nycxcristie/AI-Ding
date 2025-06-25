# AI-Ding Chrome Extension

A smart Chrome extension that provides customizable audio notifications when AI systems complete their responses across popular platforms.

## 🚀 Features

- **Universal AI Detection**: Monitors ChatGPT, Gemini, Claude, DALL-E, GitHub Copilot, Midjourney, Loveable, and Bolt.new
- **Customizable Sounds**: 4 built-in notification sounds plus custom sound upload
- **Smart Detection**: Uses advanced MutationObserver patterns to accurately detect completion
- **Volume Control**: Adjustable notification volume
- **Popup Notifications**: Optional desktop notifications
- **Clean Interface**: Modern, intuitive popup design
- **Lightweight**: Minimal resource usage and permissions

## 📦 Installation

### Method 1: Manual Installation (Developer Mode)

1. **Download the Extension**
   - Clone this repository or download as ZIP
   - Extract to a folder on your computer

2. **Enable Developer Mode**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Toggle "Developer mode" ON in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Browse to the extracted extension folder
   - Select the folder and click "Select Folder"
   - The AI-Ding extension should now appear in your extensions list

4. **Pin the Extension (Optional)**
   - Click the puzzle piece icon (🧩) in the toolbar
   - Find "AI-Ding" in the list
   - Click the pin icon to pin it to your toolbar

### Method 2: Chrome Web Store (Coming Soon)
The extension will be available on the Chrome Web Store soon for easier installation.

## 🎯 Usage

1. **Enable/Disable**: Click the extension icon and toggle notifications on/off
2. **Choose Sound**: Select from 4 preset sounds or upload your own (MP3/WAV, max 1MB)
3. **Adjust Volume**: Use the slider to set your preferred notification volume
4. **Test**: Click "Test Sound" to preview your selected notification
5. **Popup Notifications**: Toggle desktop notifications on/off

## 🔧 Supported Platforms

- **ChatGPT** (chat.openai.com, chatgpt.com)
- **Google Gemini** (gemini.google.com)
- **Claude** (claude.ai)
- **DALL-E** (labs.openai.com)
- **GitHub Copilot** (github.com)
- **Midjourney** (discord.com, midjourney.com)
- **Loveable** (loveable.ai)
- **Bolt.new** (bolt.new)

## ⚙️ Technical Details

### File Structure
```
ai-ding-extension/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for notifications
├── popup.html            # Settings interface
├── popup.js              # Settings functionality
├── styles.css            # Interface styling
├── src/
│   ├── utils/
│   │   └── notificationUtils.js  # Shared notification logic
│   └── platforms/        # Platform-specific detectors
│       ├── boltNewDetector.js
│       ├── chatGPTDetector.js
│       ├── claudeDetector.js
│       ├── dalleDetector.js
│       ├── geminiDetector.js
│       ├── githubCopilotDetector.js
│       ├── loveableDetector.js
│       └── midjourneyDetector.js
├── sounds/               # Built-in notification sounds
│   ├── bell.mp3
│   ├── chime.mp3
│   ├── ding.mp3
│   └── tada.mp3
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

### Detection Methods
- **MutationObserver**: Monitors DOM changes for completion indicators
- **Smart Filtering**: Prevents duplicate notifications with timing controls
- **Platform-Specific**: Tailored detection patterns for each AI service

### Permissions
- `activeTab`: Access to current tab for AI detection
- `storage`: Save user preferences and custom sounds
- `notifications`: Show desktop notifications

## 🛡️ Privacy & Security

- **No Data Collection**: Extension doesn't collect or transmit personal data
- **Local Storage**: All settings stored locally on your device
- **Minimal Permissions**: Only requests necessary permissions for functionality
- **Open Source**: Code is transparent and reviewable

## 🐛 Troubleshooting

### Sound Not Playing
1. Check that notifications are enabled in the extension popup
2. Ensure volume is not set to 0
3. Try a different sound option
4. Check browser sound permissions

### Detection Issues
1. Refresh the AI platform page
2. Ensure you're on a supported platform
3. Check that the extension is enabled
4. Try disabling other extensions that might interfere

### Extension Not Loading
1. Make sure you extracted the ZIP file completely
2. Verify Developer mode is enabled
3. Try refreshing the extensions page (F5)
4. Check Chrome version (requires Chrome 88+)

## 🤝 Contributing

We welcome contributions! Please feel free to:
1. Report bugs through GitHub Issues
2. Suggest new features
3. Submit pull requests for improvements
4. Help with documentation

### Development Setup
1. Clone this repository
2. Make your changes
3. Test the extension by loading it in Chrome
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Version History

See [CHANGELOG.md](CHANGELOG.md) for detailed version history.

## 📞 Support

For support, bug reports, or feature requests:
- **GitHub Issues**: [Report an issue](https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension/issues)
- **Email**: aiding.team@gmail.com
- **Discord**: [Join our community](https://discord.gg/c6FHz6uw)

## ⭐ Acknowledgments

- Thanks to the open-source community for inspiration
- Icons and design elements from various open-source projects
- Beta testers who helped refine the detection algorithms

---

**Made with ❤️ for the AI community**