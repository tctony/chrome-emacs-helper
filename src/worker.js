import {
  MENU_COPY_AS_ORG_LINK,
  MENU_ASK_COPILOT,

  MSG_WRITE_TEXT,
  MSG_ASK_COPILOT
} from "./common/constants.js";

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: MENU_COPY_AS_ORG_LINK,
    contexts: ["link"],
    title: "Copy as Org Link"
  });
  chrome.contextMenus.create({
    id: MENU_ASK_COPILOT,
    contexts: ["selection"],
    title: "Ask copilot",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === MENU_COPY_AS_ORG_LINK) {
    const link = info.linkUrl;
    const title = info.selectionText;
    const orgLink = title ? `[[${link}][${title}]]` : `[[${link}]]`;
    chrome.tabs.sendMessage(tab.id, { action: MSG_WRITE_TEXT, data: orgLink, });
  } else if (info.menuItemId === MENU_ASK_COPILOT) {
    chrome.tabs.sendMessage(tab.id, { action: MENU_ASK_COPILOT, });
  }
});

