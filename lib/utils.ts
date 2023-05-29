export const apiURL = (path: string) => {
  const baseUrl = process.env.NODE_ENV == "production"
    ? process.env.BASE_API : 'http://127.0.0.1:8910/v0';

  if (path.startsWith("/")) {
    return baseUrl + path;
  } else {
    return baseUrl + "/" + path;
  }
}