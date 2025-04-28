
(() => {
  if (!location.pathname.includes("/WebDesigner")) {
    sendLog(1);
    return;
  }

  let lastEditorVisible = false;
  const observer = new MutationObserver(() => {
    const editorExists = !!document.querySelector(".monaco-editor");
    if (editorExists && !lastEditorVisible) {
      lastEditorVisible = true;
      const script = document.createElement("script");
      script.id = "elmaThemeInjectJs"
      script.src = chrome.runtime.getURL("inject.js");
      script.onload = function () { this.remove(); };
      (document.head || document.documentElement).appendChild(script);
    }
    if(!editorExists && lastEditorVisible){
      lastEditorVisible = false;
      const existing = document.getElementById("elmaThemeInjectJs");
      if (existing) existing.remove();
    }
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();