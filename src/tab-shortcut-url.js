const browser = chrome;

const openUrl = (prefix, suffix) => {
    if (prefix) {
        const url = `${prefix}${suffix ?? ""}`;
        browser.tabs.create({ url });
    } else {
        alert("Veuillez entrer une url.");
    }
}

const initLocalStorage = () => {
    const prefixInput = document.getElementById("url-id");

    if (prefixInput) {
        browser.storage.local.get('DEFAULT_URL', ({ DEFAULT_URL }) => {
            if (DEFAULT_URL && prefixInput) {
                prefixInput.value = DEFAULT_URL;
            }
        });
    }
}

const initEventListener = () => {
    const prefixInput = document.getElementById("url-id");
    const suffixInput = document.getElementById("suffix-id");
    const urlButton = document.getElementById("open-url");

    if (prefixInput && suffixInput && urlButton) {
        prefixInput.addEventListener("keydown", (ev) => {
            if (ev.target.value) {
                browser.storage.local.set({ 'DEFAULT_URL': ev.target.value });
            }
        });

        suffixInput.addEventListener("keydown", (ev) => {
            if (ev.key === 'Enter') {
                openUrl(prefixInput.value, suffixInput.value);
            }
        });

        urlButton.addEventListener("click", () => {
            openUrl(prefixInput.value, suffixInput.value);
        });
    }
};

// Exporter les méthodes
export const tabShortcutUrl = {
    initLocalStorage,
    initEventListener
};
