import { tabShortcutUrl } from './src/tab-shortcut-url.js';

const { initEventListener, initLocalStorage } = tabShortcutUrl;

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM popup chargé');

    initLocalStorage();
    initEventListener();
});
