const browser = chrome;

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("url-id");

  browser.storage.local.get('config', ({config}) => {
    if (input && config) {
      input.value = config.DEFAULT_URL;
    }
  });

  document.getElementById("open-url").addEventListener("click", () => {
    const urlInput = input.value;
    const suffixInput = document.getElementById("suffix-id").value;

    if (urlInput) {
      const url = `${urlInput}${suffixInput ?? ""}`;
      browser.tabs.create({ url });
    } else {
      alert("Veuillez entrer une url.");
    }
  });
});
