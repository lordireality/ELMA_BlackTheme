(() => {
const waitForMonacoModel = () => new Promise(resolve => {
  const interval = setInterval(() => {
    const models = window.monaco?.editor?.getModels?.();
    const model = models?.[0];

    if (model) {
        clearInterval(interval);
        window.monaco.editor.setTheme('vs-dark');
    }
  }, 1000);
});

(async () => {
  const model = await waitForMonacoModel();
  if (!model) 
    return;
})();
})();


