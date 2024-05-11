chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == "cb.writeText") {
      const textarea = document.createElement('textarea');
      textarea.value = request.data;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }
);
