chrome.runtime.onInstalled.addListener(function () {
  // console.log("Emacs Helper Installed");

  chrome.contextMenus.create({
    id: "copyAsOrgLink",
    title: "Copy as Org Link",
    contexts: ["link"],
  });

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "copyAsOrgLink") {
      const link = info.linkUrl;
      const title = info.selectionText;
      const orgLink = title ? `[[${link}][${title}]]` : `[[${link}]]`;
      chrome.tabs.sendMessage(tab.id, { action: 'cb.writeText', data: orgLink, });
    }
  });
});

