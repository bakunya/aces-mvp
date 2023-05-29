"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  tid: string;
  data: {
    uid: string;
    tid: string;
    org_name: string;
    default_org: string;
  };
}

export default function SwitchForm({ tid, data }: Props) {
  const router = useRouter();
  const [password, setPassword] = useState("");

  async function doSwitch() {
    const rs = await fetch("/api/switch-account", {
      method: "POST",
      body: JSON.stringify({ uid: data.uid, tid: data.tid, password }),
    });

    if (rs.ok) {
      router.replace(`/${data.tid}`);
    }
    // TODO: error handling
  }

  return (
    <div className="">
      <div className="mt-8 max-w-sm ">
        <div className="grid grid-cols-1 gap-4">
          <label className="block">
            <span className="text-gray-700">Swith to</span>
            <input readOnly type="text" value={data.org_name} className="mt-1 block w-full" />
          </label>
          <label className="block">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full"
              placeholder="password"
            />
          </label>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={doSwitch}
          className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700">
          <span>
            Switch Account{" "}
            <span aria-hidden="true" className="text-slate-400 sm:inline">
              →
            </span>
          </span>
        </button>
        <Link
          href="/whoami"
          className="inline-flex justify-center rounded-md text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/60 ">
          <span>
            Cancel{" "}
            <span aria-hidden="true" className="text-black/25 sm:inline">
              →
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
