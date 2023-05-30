"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabItem {
  label: string;
  href: string;
}

interface PathTabItems {
  items: TabItem[];
}

export default function PathTabs({ items }: PathTabItems) {
  const pathname = usePathname();
  return (
    <div className="flex items-end mt-10 mb-8">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="text-[15px]">
          <div className="relative inline-flex justify-center whitespace-nowrap p-4 pb-2 border-b border-gray-600/40">
            <span className="invisible font-medium">{item.label}</span>
            {item.href == pathname && (
              <>
                <span
                  className="absolute left-1/2 top-1/2 font-medium"
                  style={{ transform: "translate3d(-50%, -35%, 0)" }}>
                  {item.label}
                </span>
                <div className="absolute w-full bottom-[-1px] h-[2px] bg-blue-700"></div>
              </>
            )}
            {item.href != pathname && (
              <span className="absolute left-1/2 top-1/2" style={{ transform: "translate3d(-50%, -35%, 0)" }}>
                {item.label}
              </span>
            )}
          </div>
        </Link>
      ))}
      <div className="grow shrink basis-[0%] border-b border-gray-600/40"></div>
    </div>
  );
}
