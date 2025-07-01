export default function myJSONtringify(value) {
  // Handle null
  if (value === null) return 'null';

  // Handle strings
  if (typeof value === 'string') return `"${value}"`;

  // Handle numbers and booleans
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  // Handle arrays
  if (Array.isArray(value)) {
    const elements = value.map(el => jsonStringify(el)).join(',');
    return `[${elements}]`;
  }

  // Handle objects
  if (typeof value === 'object') {
    const entries = Object.entries(value).map(([key, val]) => {
      return `"${key}":${jsonStringify(val)}`;
    });
    return `{${entries.join(',')}}`;
  }

  // For safety – though not needed in your case
  return undefined;
}

