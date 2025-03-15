import { MSG_WRITE_TEXT, MSG_ASK_COPILOT } from "../common/constants.js";
import { build_org_protocol_url } from "../common/url.js";
import { open_url_in_background } from "./util.js";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == MSG_WRITE_TEXT) {
    write_text_to_clipboard(request.data);
  } else if (request.action == MSG_ASK_COPILOT) {
    ask_copilot();
  }
});

function write_text_to_clipboard(text) {
  console.log(`write text to clipboard: ${text}`);

  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function ask_copilot() {
  const text = window.getSelection().toString();
  console.log(`ask copilot with: ${text}`);
  const url = build_org_protocol_url("copilot", { text });
  console.log(`opening url ${url}`);
  open_url_in_background(url);
}
