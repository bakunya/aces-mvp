"use client"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logout from "./logout";
import useSidebarStore from "@/store/sidebarStore";
import { useEffect } from "react";
import useViewPort from "@/hooks/useViewPort";

export default function Header() {
	const toggler = useSidebarStore(s => s.toggler)
	const setOpen = useSidebarStore(s => s.setOpen)
	const isOpen = useSidebarStore(s => s.isOpen)
	const { width } = useViewPort()

	useEffect(() => { if(width > 700) setOpen(false) }, [width])

	return (
		<header className="fixed w-full z-[1200] top-0 left-0 h-16 px-5 flex items-center justify-between bg-white border-b">
			<div className="flex gap-4 items-center">
				<button
					className="inline-block border-e p-3 text-gray-700 hover:bg-gray-50 focus:relative"
					title="Edit Product"
					onClick={toggler}
				>
					{isOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
				</button>
				<p>State: </p>
			</div>
			<div>
				<Logout />
			</div>
		</header>
	);
}
