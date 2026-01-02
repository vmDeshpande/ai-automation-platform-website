export const basePath =
  process.env.NODE_ENV === "production"
    ? "/ai-automation-platform-website"
    : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
