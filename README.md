# AI Ding Chrome Extension

A smart Chrome extension that provides customizable audio notifications when AI systems complete their responses across popular platforms.

## 🚀 Features

- **Universal AI Detection**: Monitors ChatGPT, Gemini, Claude, DALL-E, GitHub Copilot, Midjourney, Loveable, and Bolt.new
- **Customizable Sounds**: 3 built-in notification sounds plus custom sound upload
- **Smart Detection**: Uses advanced MutationObserver patterns to accurately detect completion
- **Volume Control**: Adjustable notification volume
- **Clean Interface**: Modern, intuitive popup design
- **Lightweight**: Minimal resource usage and permissions

## 📦 Installation

### From Chrome Web Store (Recommended)
1. Visit the Chrome Web Store (link coming soon)
2. Click "Add to Chrome"
3. Click "Add Extension" to confirm

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The AI Ding icon should appear in your extensions bar

## 🎯 Usage

1. **Enable/Disable**: Click the extension icon and toggle notifications on/off
2. **Choose Sound**: Select from 3 preset sounds or upload your own (MP3/WAV, max 1MB)
3. **Adjust Volume**: Use the slider to set your preferred notification volume
4. **Test**: Click "Test Sound" to preview your selected notification

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

### Detection Methods
- **MutationObserver**: Monitors DOM changes for completion indicators
- **Smart Filtering**: Prevents duplicate notifications with timing controls
- **Platform-Specific**: Tailored detection patterns for each AI service

### Permissions
- `activeTab`: Access to current tab for AI detection
- `storage`: Save user preferences and custom sounds

### File Structure
```
ai-ding-extension/
├── manifest.json          # Extension configuration
├── content.js            # Main detection logic
├── popup.html           # Settings interface
├── popup.js             # Settings functionality
├── styles.css           # Interface styling
├── sounds/              # Built-in notification sounds
│   ├── ding.mp3
│   ├── bell.mp3
│   └── chime.mp3
├── icons/               # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── README.md
```

## 🛡️ Privacy & Security

- **No Data Collection**: Extension doesn't collect or transmit personal data
- **Local Storage**: All settings stored locally on your device
- **Minimal Permissions**: Only requests necessary permissions for functionality
- **Open Source**: Code is transparent and reviewable

## 🎨 Customization

### Custom Sounds
1. Click the extension icon
2. Select "Custom Sound" from the dropdown
3. Upload an MP3 or WAV file (max 1MB)
4. Test your custom sound

### Volume Control
Use the volume slider in the popup to adjust notification loudness from 0-100%.

## 🐛 Troubleshooting

### Sound Not Playing
1. Check that notifications are enabled
2. Ensure volume is not set to 0
3. Try a different sound option
4. Check browser sound permissions

### Detection Issues
1. Refresh the AI platform page
2. Ensure you're on a supported platform
3. Check that the extension is enabled
4. Try disabling other extensions that might interfere

## 🤝 Contributing

We welcome contributions! Please feel free to:
1. Report bugs through GitHub Issues
2. Suggest new features
3. Submit pull requests for improvements
4. Help with documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Changelog

### Version 1.0.0
- Initial release
- Support for 8 major AI platforms
- Custom sound upload functionality
- Modern popup interface
- Volume control
- Smart detection algorithms

## 📞 Support

For support, bug reports, or feature requests:
- GitHub Issues: [Report an issue]
- Email: support@aiding-extension.com

## ⭐ Acknowledgments

- Thanks to the open-source community for inspiration
- Icons and design elements from various open-source projects
- Beta testers who helped refine the detection algorithms

---

**Made with ❤️ for the AI community**