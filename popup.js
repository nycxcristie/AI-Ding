// AI Ding Popup Script
class AIDingPopup {
  constructor() {
    this.settings = {
      enabled: true,
      sound: 'tada',
      volume: 0.7,
      customSound: null,
      popupEnabled: true
    };
    
    this.init();
  }

  async init() {
    await this.loadSettings();
    this.setupEventListeners();
    this.updateUI();
  }

  async loadSettings() {
    try {
      const result = await chrome.storage.local.get([
        'aiDingEnabled',
        'aiDingSound',
        'aiDingVolume',
        'aiDingCustomSound',
        'aiDingPopupEnabled'
      ]);
      
      this.settings.enabled = result.aiDingEnabled !== false;
      this.settings.sound = result.aiDingSound || 'tada';
      this.settings.volume = result.aiDingVolume || 0.7;
      this.settings.customSound = result.aiDingCustomSound || null;
      this.settings.popupEnabled = result.aiDingPopupEnabled !== false;
      
      // If custom sound is set, automatically select "custom" option
      if (this.settings.customSound) {
        this.settings.sound = 'custom';
      }
    } catch (error) {
      console.log('Using default settings');
    }
  }

  async saveSettings() {
    try {
      await chrome.storage.local.set({
        aiDingEnabled: this.settings.enabled,
        aiDingSound: this.settings.sound,
        aiDingVolume: this.settings.volume,
        aiDingCustomSound: this.settings.customSound,
        aiDingPopupEnabled: this.settings.popupEnabled
      });
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  }

  setupEventListeners() {
    // Enable toggle
    const enableToggle = document.getElementById('enableToggle');
    enableToggle.addEventListener('change', (e) => {
      this.settings.enabled = e.target.checked;
      this.saveSettings();
      this.updateUI();
    });

    // Popup notifications toggle
    const popupToggle = document.getElementById('popupToggle');
    popupToggle.addEventListener('change', (e) => {
      this.settings.popupEnabled = e.target.checked;
      this.saveSettings();
      this.updateUI();
    });

    // Sound selection
    const soundSelect = document.getElementById('soundSelect');
    soundSelect.addEventListener('change', (e) => {
      this.settings.sound = e.target.value;
      if (e.target.value !== 'custom') {
        this.settings.customSound = null;
      }
      this.saveSettings();
      this.updateUI();
    });

    // Custom sound file
    const customSoundFile = document.getElementById('customSoundFile');
    customSoundFile.addEventListener('change', (e) => {
      this.handleCustomSoundUpload(e.target.files[0]);
    });

    // Volume slider
    const volumeSlider = document.getElementById('volumeSlider');
    volumeSlider.addEventListener('input', (e) => {
      this.settings.volume = parseFloat(e.target.value);
      this.updateVolumeDisplay();
    });

    volumeSlider.addEventListener('change', (e) => {
      this.settings.volume = parseFloat(e.target.value);
      this.saveSettings();
    });

    // Test sound button
    const testButton = document.getElementById('testSound');
    testButton.addEventListener('click', () => {
      this.testSound();
    });
  }

  updateUI() {
    // Update toggles
    document.getElementById('enableToggle').checked = this.settings.enabled;
    document.getElementById('popupToggle').checked = this.settings.popupEnabled;
    
    // Update sound selection
    document.getElementById('soundSelect').value = this.settings.sound;
    
    // Show/hide custom sound section
    const customSection = document.getElementById('customSoundSection');
    customSection.style.display = this.settings.sound === 'custom' ? 'block' : 'none';
    
    // Update volume
    document.getElementById('volumeSlider').value = this.settings.volume;
    this.updateVolumeDisplay();
    
    // Update custom sound file name
    if (this.settings.customSound) {
      document.getElementById('fileName').textContent = 'Custom sound loaded';
    } else {
      document.getElementById('fileName').textContent = 'No file selected';
    }
  }

  updateVolumeDisplay() {
    const volumePercent = Math.round(this.settings.volume * 100);
    document.getElementById('volumeValue').textContent = `${volumePercent}%`;
  }

  async handleCustomSoundUpload(file) {
    if (!file) return;
    
    // Check file size (1MB limit)
    if (file.size > 1024 * 1024) {
      alert('File size must be less than 1MB');
      return;
    }
    
    // Check file type
    if (!file.type.match(/audio\/(mp3|wav|mpeg)/)) {
      alert('Please select an MP3 or WAV file');
      return;
    }
    
    try {
      // Convert file to data URL
      const reader = new FileReader();
      reader.onload = async (e) => {
        this.settings.customSound = e.target.result;
        this.settings.sound = 'custom';
        await this.saveSettings();
        this.updateUI();
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Failed to upload custom sound:', error);
      alert('Failed to upload sound file');
    }
  }

  async testSound() {
    try {
      let audioUrl;
      
      if (this.settings.sound === 'custom' && this.settings.customSound) {
        audioUrl = this.settings.customSound;
      } else {
        audioUrl = chrome.runtime.getURL(`sounds/${this.settings.sound}.mp3`);
      }
      
      const audio = new Audio(audioUrl);
      audio.volume = this.settings.volume;
      await audio.play();
      
      // Visual feedback
      const testButton = document.getElementById('testSound');
      const originalText = testButton.innerHTML;
      testButton.innerHTML = '<span class="test-icon">✓</span>Played!';
      testButton.classList.add('played');
      
      setTimeout(() => {
        testButton.innerHTML = originalText;
        testButton.classList.remove('played');
      }, 1000);
      
    } catch (error) {
      console.error('Failed to play test sound:', error);
      alert('Failed to play sound. Please check your selection.');
    }
  }
}

// Initialize popup when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new AIDingPopup();
});