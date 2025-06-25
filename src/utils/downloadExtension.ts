import JSZip from 'jszip';

export async function downloadAIDingExtension(): Promise<void> {
  try {
    const zip = new JSZip();
    
    // Add manifest.json
    const manifest = {
      "manifest_version": 3,
      "name": "AI-Ding",
      "version": "1.0.0",
      "description": "Get notified when AI systems complete their responses",
      "permissions": ["activeTab", "storage", "notifications"],
      "background": {
        "service_worker": "background.js"
      },
      "content_scripts": [
        {
          "matches": ["https://chat.openai.com/*", "https://chatgpt.com/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/chatGPTDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://gemini.google.com/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/geminiDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://claude.ai/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/claudeDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://labs.openai.com/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/dalleDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://github.com/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/githubCopilotDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://discord.com/*", "https://midjourney.com/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/midjourneyDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://loveable.ai/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/loveableDetector.js"],
          "run_at": "document_end"
        },
        {
          "matches": ["https://bolt.new/*"],
          "js": ["src/utils/notificationUtils.js", "src/platforms/boltNewDetector.js"],
          "run_at": "document_end"
        }
      ],
      "action": {
        "default_popup": "popup.html",
        "default_title": "AI-Ding Settings"
      },
      "icons": {
        "16": "icons/icon16.png",
        "32": "icons/icon32.png",
        "48": "icons/icon48.png",
        "128": "icons/icon128.png"
      }
    };
    
    zip.file("manifest.json", JSON.stringify(manifest, null, 2));
    
    // Add background.js
    const backgroundScript = `
// AI-Ding Background Script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PLAY_NOTIFICATION') {
    // Handle notification requests from content scripts
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon48.png',
      title: 'AI Response Complete',
      message: \`\${message.platform} has finished responding\`
    });
  }
});

// Initialize extension
chrome.runtime.onInstalled.addListener(() => {
  console.log('AI-Ding extension installed');
});
`;
    
    zip.file("background.js", backgroundScript);
    
    // Add popup.html
    const popupHTML = <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      width: 300px;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo {
      width: 48px;
      height: 48px;
      margin: 0 auto 10px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
    }
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }
    .setting {
      margin-bottom: 15px;
    }
    .setting label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
      color: #555;
    }
    .toggle {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .switch {
      position: relative;
      width: 50px;
      height: 24px;
      background: #ccc;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.3s;
    }
    .switch.active {
      background: #667eea;
    }
    .switch::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
    }
    .switch.active::after {
      transform: translateX(26px);
    }
    select, input[type="range"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
    }
    .volume-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .volume-value {
      min-width: 35px;
      text-align: center;
      font-weight: 500;
    }
    .test-btn {
      background: #667eea;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 10px;
    }
    .test-btn:hover {
      background: #5a67d8;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">🔔</div>
    <div class="title">AI-Ding Settings</div>
  </div>
  
  <div class="setting">
    <div class="toggle">
      <label>Enable Notifications</label>
      <div class="switch active" id="enableToggle"></div>
    </div>
  </div>
  
  <div class="setting">
    <label for="soundSelect">Notification Sound</label>
    <select id="soundSelect">
      <option value="ding">Soft Ding</option>
      <option value="bell">Bell</option>
      <option value="chime">Chime</option>
      <option value="custom">Custom Sound</option>
    </select>
  </div>
  
  <div class="setting">
    <label>Volume</label>
    <div class="volume-container">
      <input type="range" id="volumeSlider" min="0" max="100" value="70">
      <span class="volume-value" id="volumeValue">70%</span>
    </div>
  </div>
  
  <button class="test-btn" id="testBtn">Test Sound</button>
  
  <script src="popup.js"></script>
</body>
</html>\`;
    
    zip.file("popup.html", popupHTML);
    
    // Add popup.js
    const popupJS = \`
document.addEventListener('DOMContentLoaded', function() {
  const enableToggle = document.getElementById('enableToggle');
  const soundSelect = document.getElementById('soundSelect');
  const volumeSlider = document.getElementById('volumeSlider');
  const volumeValue = document.getElementById('volumeValue');
  const testBtn = document.getElementById('testBtn');
  
  // Load saved settings
  chrome.storage.sync.get(['enabled', 'sound', 'volume'], function(result) {
    if (result.enabled !== false) {
      enableToggle.classList.add('active');
    } else {
      enableToggle.classList.remove('active');
    }
    
    if (result.sound) {
      soundSelect.value = result.sound;
    }
    
    if (result.volume !== undefined) {
      volumeSlider.value = result.volume;
      volumeValue.textContent = result.volume + '%';
    }
  });
  
  // Toggle notifications
  enableToggle.addEventListener('click', function() {
    const isActive = enableToggle.classList.contains('active');
    if (isActive) {
      enableToggle.classList.remove('active');
      chrome.storage.sync.set({enabled: false});
    } else {
      enableToggle.classList.add('active');
      chrome.storage.sync.set({enabled: true});
    }
  });
  
  // Sound selection
  soundSelect.addEventListener('change', function() {
    chrome.storage.sync.set({sound: soundSelect.value});
  });
  
  // Volume control
  volumeSlider.addEventListener('input', function() {
    const volume = volumeSlider.value;
    volumeValue.textContent = volume + '%';
    chrome.storage.sync.set({volume: parseInt(volume)});
  });
  
  // Test sound
  testBtn.addEventListener('click', function() {
    const sound = soundSelect.value;
    const volume = parseInt(volumeSlider.value) / 100;
    
    if (sound === 'custom') {
      alert('Custom sound feature coming soon!');
      return;
    }
    
    const audio = new Audio(\`sounds/\${sound}.mp3\`);
    audio.volume = volume;
    audio.play().catch(e => console.log('Could not play sound:', e));
  });
});
\`;
    
    zip.file("popup.js", popupJS);
    
    // Add notification utils
    const notificationUtils = \`
// AI-Ding Notification Utilities
class NotificationManager {
  constructor() {
    this.lastNotification = 0;
    this.throttleDelay = 2000; // 2 seconds
    this.loadSettings();
  }
  
  async loadSettings() {
    return new Promise((resolve) => {
      chrome.storage.sync.get(['enabled', 'sound', 'volume'], (result) => {
        this.enabled = result.enabled !== false;
        this.sound = result.sound || 'ding';
        this.volume = (result.volume || 70) / 100;
        resolve();
      });
    });
  }
  
  async handleCompletion(platform) {
    const now = Date.now();
    if (now - this.lastNotification < this.throttleDelay) {
      return; // Throttle notifications
    }
    
    await this.loadSettings();
    
    if (!this.enabled) {
      return;
    }
    
    this.lastNotification = now;
    this.playNotification(platform);
  }
  
  playNotification(platform) {
    // Play sound
    if (this.sound !== 'custom') {
      const audio = new Audio(chrome.runtime.getURL(\`sounds/\${this.sound}.mp3\`));
      audio.volume = this.volume;
      audio.play().catch(e => console.log('AI-Ding: Could not play sound:', e));
    }
    
    // Send message to background script for popup notification
    chrome.runtime.sendMessage({
      type: 'PLAY_NOTIFICATION',
      platform: platform
    });
    
    console.log(\`AI-Ding: \${platform} response completed\`);
  }
}

// Initialize notification manager
window.aiDingNotificationManager = new NotificationManager();
\`;
    
    zip.folder("src/utils").file("notificationUtils.js", notificationUtils);
    
    // Add platform detectors
    const chatGPTDetector = \`
// ChatGPT Detector
class ChatGPTDetector {
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
      // Look for stop button changing to send button
      const sendButton = document.querySelector('[data-testid="send-button"]');
      const stopButton = document.querySelector('[data-testid="stop-button"]');
      
      if (sendButton && !stopButton) {
        // Check if there's a new assistant message
        const messages = document.querySelectorAll('[data-message-author-role="assistant"]');
        if (messages.length > 0) {
          const lastMessage = messages[messages.length - 1];
          const isComplete = !lastMessage.querySelector('.result-streaming');
          
          if (isComplete) {
            this.notificationManager.handleCompletion('ChatGPT');
          }
        }
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ChatGPTDetector();
  });
} else {
  new ChatGPTDetector();
}
\`;
    
    zip.folder("src/platforms").file("chatGPTDetector.js", chatGPTDetector);
    
    // Add other platform detectors (simplified versions)
    const geminiDetector = \`
// Gemini Detector
class GeminiDetector {
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
    const observer = new MutationObserver(() => {
      const responses = document.querySelectorAll('[data-response-index]');
      if (responses.length > 0) {
        const lastResponse = responses[responses.length - 1];
        const isComplete = !lastResponse.querySelector('.loading');
        
        if (isComplete) {
          this.notificationManager.handleCompletion('Gemini');
        }
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GeminiDetector();
  });
} else {
  new GeminiDetector();
}
\`;
    
    zip.folder("src/platforms").file("geminiDetector.js", geminiDetector);
    
    // Add Claude detector
    const claudeDetector = \`
// Claude Detector
class ClaudeDetector {
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
    const observer = new MutationObserver(() => {
      const messages = document.querySelectorAll('[data-is-streaming="false"]');
      if (messages.length > 0) {
        this.notificationManager.handleCompletion('Claude');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ClaudeDetector();
  });
} else {
  new ClaudeDetector();
}
\`;
    
    zip.folder("src/platforms").file("claudeDetector.js", claudeDetector);
    
    // Add DALL-E detector
    const dalleDetector = \`
// DALL-E Detector
class DalleDetector {
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
    const observer = new MutationObserver(() => {
      const images = document.querySelectorAll('img[src*="dalle"]');
      if (images.length > 0) {
        this.notificationManager.handleCompletion('DALL-E');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new DalleDetector();
  });
} else {
  new DalleDetector();
}
\`;
    
    zip.folder("src/platforms").file("dalleDetector.js", dalleDetector);
    
    // Add GitHub Copilot detector
    const githubDetector = \`
// GitHub Copilot Detector
class GitHubCopilotDetector {
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
    const observer = new MutationObserver(() => {
      const suggestions = document.querySelectorAll('.copilot-suggestion');
      if (suggestions.length > 0) {
        this.notificationManager.handleCompletion('GitHub Copilot');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GitHubCopilotDetector();
  });
} else {
  new GitHubCopilotDetector();
}
\`;
    
    zip.folder("src/platforms").file("githubCopilotDetector.js", githubDetector);
    
    // Add Midjourney detector
    const midjourneyDetector = \`
// Midjourney Detector
class MidjourneyDetector {
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
    const observer = new MutationObserver(() => {
      const images = document.querySelectorAll('img[src*="cdn.discordapp.com"]');
      if (images.length > 0) {
        this.notificationManager.handleCompletion('Midjourney');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MidjourneyDetector();
  });
} else {
  new MidjourneyDetector();
}
\`;
    
    zip.folder("src/platforms").file("midjourneyDetector.js", midjourneyDetector);
    
    // Add Loveable detector
    const loveableDetector = \`
// Loveable Detector
class LoveableDetector {
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
    const observer = new MutationObserver(() => {
      const responses = document.querySelectorAll('.ai-response');
      if (responses.length > 0) {
        this.notificationManager.handleCompletion('Loveable');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LoveableDetector();
  });
} else {
  new LoveableDetector();
}
\`;
    
    zip.folder("src/platforms").file("loveableDetector.js", loveableDetector);
    
    // Add Bolt.new detector
    const boltDetector = \`
// Bolt.new Detector
class BoltNewDetector {
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
    const observer = new MutationObserver(() => {
      const responses = document.querySelectorAll('.bolt-response');
      if (responses.length > 0) {
        this.notificationManager.handleCompletion('Bolt.new');
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BoltNewDetector();
  });
} else {
  new BoltNewDetector();
}
\`;
    
    zip.folder("src/platforms").file("boltNewDetector.js", boltDetector);
    
    // Fetch and add sound files
    try {
      const dingResponse = await fetch('/sounds/ding.mp3');
      const dingBlob = await dingResponse.blob();
      zip.folder("sounds").file("ding.mp3", dingBlob);
      
      const bellResponse = await fetch('/sounds/bell.mp3');
      const bellBlob = await bellResponse.blob();
      zip.folder("sounds").file("bell.mp3", bellBlob);
      
      // Add a simple chime sound (we'll create a basic one)
      const chimeBlob = dingBlob; // Use ding as placeholder for chime
      zip.folder("sounds").file("chime.mp3", chimeBlob);
    } catch (error) {
      console.log('Could not fetch sound files, extension will work without sounds');
    }
    
    // Add icon files (we'll create simple placeholder icons)
    const iconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`;
    
    // Create simple icon files (in a real implementation, you'd use proper PNG files)
    const iconData = btoa(iconSVG); // Base64 encode the SVG
    zip.folder("icons").file("icon16.png", iconData, {base64: true});
    zip.folder("icons").file("icon32.png", iconData, {base64: true});
    zip.folder("icons").file("icon48.png", iconData, {base64: true});
    zip.folder("icons").file("icon128.png", iconData, {base64: true});
    
    // Generate and download the ZIP file
    const content = await zip.generateAsync({type: "blob"});
    
    // Create download link
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-ding-extension.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('AI-Ding extension downloaded successfully!');
  } catch (error) {
    console.error('Error creating extension:', error);
    throw error;
  }
}