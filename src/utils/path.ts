const basePath = import.meta.env.PROD ? "/new-website/" : "/";

/**
 * Get path including base path
 * @param {string} path - The path to get
 */
function getPath(path: string) {
  const processed_path = path.substring(1);
  return `${basePath}${processed_path}`;
}

/**
 * Normalize a path by removing leading and trailing slashes.
 * @param path - The path to normalize.
 * @returns - The normalized path.
 */
function normalizePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

/**
 * Match two paths, ignoring leading and trailing slashes.
 * @param path1 - The first path.
 * @param path2 - The second path.
 * @returns - True if the paths match, false otherwise.
 */
function matchPaths(path1: string, path2: string) {
  const normalizedPath1 = normalizePath(path1);
  const normalizedPath2 = normalizePath(path2);
  return normalizedPath1 === normalizedPath2;
}

export { getPath, normalizePath, matchPaths };
