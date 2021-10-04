export function queryParams<K extends object>(params: K) {
  return (
    "?" +
    Object.entries(params)
      .filter(([, value]) => typeof value !== "undefined")
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
}
