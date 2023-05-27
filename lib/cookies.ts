import { cookies } from "next/headers";
import { unsealData } from "iron-session";

function getCookie() {
  return cookies().get(process.env.COOKIE_NAME as string);
}

export function getCookieHeaders() {
  const cookie = getCookie()
  return {
    headers: {
      "x-aces-auth": `${cookie?.value}`,
    }
  }
}

export async function getUserInfo() {
  const cookie = getCookie()
  if (!cookie) {
    console.log("cookie not found");
    return null;
  }

  /**
   * The unsealed data will be in the form:
   * data: {
   *    user: {
   *      ts: 1234567890,
   *      uid: '.....',
   *      .....
   *    }
   * }
   */

  const data: any = await unsealData(cookie.value, {
    password: process.env.COOKIE_PASSWORD as string
  })
  console.log("DATA", data);

  const user: User = data.user;

  // return (user.ts && user.uid && user.tid) ? user : null
  if (user.ts && user.uid && user.tid) {
    console.log("USER FROM COOKIE", user);
    return user;
  }
  return null;
}