export function build_url(protocol, host, queryParams) {
  // Construct the base URL
  let url = `${protocol}://${host}`;

  // Check if there are query parameters
  if (Object.keys(queryParams).length > 0) {
    // Append query parameters to the URL
    const queryString = Object.keys(queryParams)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
      .join('&');
    url += `?${queryString}`;
  }

  return url;
}

export function build_org_protocol_url(action, params) {
  return build_url("org-protocol", action, params);
}
