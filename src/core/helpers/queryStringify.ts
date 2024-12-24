export const queryStringify = (data: Record<string, unknown>) => {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Data must be object');
  }

  const queryString = Object.entries(data)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value
          .map((item: unknown) => `${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`)
          .join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');

  return `?${queryString}`;
};
