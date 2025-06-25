// Background script for AI Ding Extension
console.log('🔧 AI Ding Background: Service worker starting up');

chrome.runtime.onInstalled.addListener(() => {
  console.log('🔧 AI Ding Background: Extension installed, setting default settings');
  
  // Set default settings
  chrome.storage.local.set({
    aiDingEnabled: true,
    aiDingSound: 'tada',
    aiDingVolume: 0.7,
    aiDingCustomSound: null,
    aiDingPopupEnabled: true
  });
  
  console.log('✅ AI Ding Background: Default settings saved');
});

// Listen for connections from content scripts (helps keep service worker active)
chrome.runtime.onConnect.addListener((port) => {
  console.log('🔗 AI Ding Background: Content script connected via port:', port.name);
  
  port.onDisconnect.addListener(() => {
    console.log('🔗 AI Ding Background: Content script disconnected from port:', port.name);
  });
  
  // Keep the port alive
  port.onMessage.addListener((message) => {
    console.log('🔗 AI Ding Background: Message received via port:', message);
  });
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('📨 AI Ding Background: Message received from content script:', {
    action: request.action,
    data: request.data,
    senderTabId: sender.tab?.id,
    senderUrl: sender.tab?.url
  });
  
  if (request.action === 'showNotification') {
    console.log('📨 AI Ding Background: Processing showNotification request with data:', request.data);
    
    // Process the notification asynchronously
    showNotification(request.data).then(() => {
      console.log('✅ AI Ding Background: Notification processing completed');
      sendResponse({ success: true });
    }).catch((error) => {
      console.error('❌ AI Ding Background: Error processing notification:', error);
      sendResponse({ success: false, error: error.message });
    });
    
    // Return true to indicate we will send a response asynchronously
    return true;
  }
  
  // Handle other message types if needed
  sendResponse({ success: false, error: 'Unknown action' });
});

async function showNotification(data) {
  console.log('🔔 AI Ding Background: showNotification called with data:', data);
  
  try {
    // Check if popup notifications are enabled
    const result = await chrome.storage.local.get(['aiDingPopupEnabled']);
    console.log('🔔 AI Ding Background: Retrieved popup enabled setting:', {
      aiDingPopupEnabled: result.aiDingPopupEnabled,
      shouldShowNotification: result.aiDingPopupEnabled !== false
    });
    
    if (result.aiDingPopupEnabled === false) {
      console.log('🔔 AI Ding Background: Popup notifications disabled, skipping notification');
      return;
    }

    console.log('🔔 AI Ding Background: Creating notification for platform:', data.platform);
    
    const notificationOptions = {
      type: 'basic',
      iconUrl: chrome.runtime.getURL('icons/icon48.png'),
      title: 'AI Response Complete',
      message: `${data.platform} has finished generating a response.`,
      priority: 1
    };
    
    console.log('🔔 AI Ding Background: Notification options:', notificationOptions);
    
    try {
      // Create the notification
      const notificationId = await chrome.notifications.create('ai-ding-notification', notificationOptions);
      console.log('✅ AI Ding Background: Notification created successfully with ID:', notificationId);
      
      // Auto-clear notification after 5 seconds
      setTimeout(() => {
        console.log('🔔 AI Ding Background: Auto-clearing notification');
        chrome.notifications.clear('ai-ding-notification');
      }, 120000);
      
    } catch (notificationError) {
      console.error('❌ AI Ding Background: Error creating notification:', notificationError);
      throw notificationError;
    }
    
  } catch (error) {
    console.error('❌ AI Ding Background: Could not show notification:', error);
    throw error;
  }
}

// Add service worker lifecycle logging
self.addEventListener('activate', (event) => {
  console.log('🔧 AI Ding Background: Service worker activated');
});

self.addEventListener('install', (event) => {
  console.log('🔧 AI Ding Background: Service worker installed');
});

// Add error handling for unhandled promise rejections
self.addEventListener('unhandledrejection', (event) => {
  console.error('❌ AI Ding Background: Unhandled promise rejection:', event.reason);
});

// Keep service worker alive with periodic heartbeat
let heartbeatInterval;

function startHeartbeat() {
  if (heartbeatInterval) return;
  
  heartbeatInterval = setInterval(() => {
    console.log('💓 AI Ding Background: Service worker heartbeat');
  }, 25000); // Every 25 seconds, well under the 30-second timeout
}

function stopHeartbeat() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
    console.log('💓 AI Ding Background: Service worker heartbeat stopped');
  }
}

// Start heartbeat when service worker becomes active
startHeartbeat();

console.log('✅ AI Ding Background: Service worker setup complete');