const browser = chrome;

async function loadConfig() {
  const response = await fetch(browser.runtime.getURL('.env'));
  const text = await response.text();

  const config = text.split('\n').reduce((acc, line) => {
    const [key, value] = line.split('=');
    if (key && value) acc[key] = value;
    return acc;
  }, {});

  browser.storage.local.set({ config }, () => {
    console.log('Configuration sauvegardée dans chrome.storage');
  });
}

browser.runtime.onInstalled.addListener(() => {
  loadConfig();
});