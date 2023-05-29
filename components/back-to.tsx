import Link from "next/link";

interface Props {
  label: string;
  href: string;
}
export default function BackTo({ label, href }: Props) {
  return (
    <div className="leading-6 text-[14px] font-light mb-4">
      <Link href={href} className="inline-block text-blue-600">
        <svg
          className="inline-block fill-blue-700 w-4 h-4 mr-1"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          aria-hidden="true"
          focusable="false">
          <path d="M14 7.5H3.439l4.29-4.387-.714-.699L1.55 8l5.465 5.586.714-.7L3.44 8.5h10.56v-1z"></path>
        </svg>
        <span className="inline-block border-b-[1px] border-blue-600">{label}</span>
      </Link>
    </div>
  );
}
