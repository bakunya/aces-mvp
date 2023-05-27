import Logout from "./logout";

export default function Header() {
  return (
    <header className="fixed w-full z-[1200] top-0 left-0 h-16 px-5 flex items-center justify-between bg-white border-b">
      <div className="flex gap-4 items-center">
        <p>KIRI</p>
        <p>State: </p>
      </div>
      <div>
        <Logout />
      </div>
    </header>
  );
}
