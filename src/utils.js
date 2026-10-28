/**
 * Resolves a public image path correctly for both local dev
 * and GitHub Pages (which uses a /Coffe-ofive/ base path).
 * External URLs (http/https) are returned unchanged.
 */
export const getImg = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path; // Unsplash or any external URL
  // Strip leading slash, then prepend Vite's BASE_URL (/Coffe-ofive/ in prod, / in dev)
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};
