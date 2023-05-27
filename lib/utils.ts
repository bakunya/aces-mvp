export const apiURL = (path: string) => {
  if (path.startsWith("/")) {
    return process.env.BASE_API + path;
  } else {
    return process.env.BASE_API + "/" + path;
  }
}