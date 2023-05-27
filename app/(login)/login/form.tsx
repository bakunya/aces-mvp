"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(e: React.MouseEvent<HTMLElement>) {
    const url = "/api/auth";
    const rs = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (rs.ok) {
      router.refresh();
    }
  }

  return (
    <div className="form-login">
      <div className="mt-8 max-w-sm ">
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-gray-700">Username atau email</span>
            <input
              type="text"
              value={username}
              autoFocus
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              className="mt-1 block w-full"
              placeholder="username atau email"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
              placeholder="password"
            />
          </label>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={login}
          className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-10 bg-slate-900 text-white hover:bg-slate-700">
          <span>
            Login{" "}
            <span aria-hidden="true" className="text-slate-400 sm:inline">
              →
            </span>
          </span>
        </button>
        <button
          disabled
          className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/60 ">
          <span>
            Fake Button{" "}
            <span aria-hidden="true" className="text-black/25 sm:inline">
              →
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
