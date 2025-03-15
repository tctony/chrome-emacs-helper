export function open_url_in_background(url) {
  // Create an invisible iframe
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;

  // Append the iframe to the document body
  document.body.appendChild(iframe);

  // Optionally, remove the iframe after it has loaded
  iframe.onload = function () {
    document.body.removeChild(iframe);
  };
}

