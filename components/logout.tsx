"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  async function logout() {
    const rs = await fetch("/api/logout", { method: "POST" });
    if (rs.ok) {
      router.refresh();
    }
  }
  return (
    <button className="" onClick={logout}>
      Logout
    </button>
  );
}
