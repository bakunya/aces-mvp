"use client"
import useViewPort from "@/hooks/useViewPort";
import useSidebarStore from "@/store/sidebarStore";
import Link from "next/link";
import { useEffect, useRef } from "react";

const menuItems = (type: string) => {
	if (type == "partner") return [
		{ href: "new-project", label: "New Project" },
		{ href: "invite", label: "Invite Members" },
		{ href: "users", label: "Users" },
		{ href: "clients", label: "Clients" },
		{ href: "projects", label: "Projects" },
		{ href: "personae", label: "Personae" },
		{ href: "settings", label: "Settings" },
	];

	return [
		{ href: "new-project", label: "New Project" },
		{ href: "invite", label: "Invite Members" },
		{ href: "users", label: "Users" },
		// { href: "clients", label: "Clients" },
		{ href: "projects", label: "Projects" },
		{ href: "personae", label: "Personae" },
		{ href: "settings", label: "Settings" },
	];
}

interface Props {
	type: string;
	tid: string;
}

export default function Sidebar({ type, tid }: Props) {
	const items = menuItems(type);
	const asideRef = useRef<HTMLElement>(null)
	const isOpen = useSidebarStore((state) => state.isOpen)
	const { width } = useViewPort()

	useEffect(() => {
		const cnt = document.getElementById("container")

		if (width > 700 && cnt) {
			if (isOpen) {
				cnt.style.width = `calc(100vw - 200px)`
			} else {
				cnt.style.width = `100vw`
			}
		}


		if (asideRef.current) {
			if (isOpen) {
				asideRef.current.classList.remove('hide')
				asideRef.current.classList.add('open')
			} else {
				asideRef.current.classList.remove('open')
				asideRef.current.classList.add('hide')
			}
		}

	}, [asideRef, width, isOpen])



	return (
		<aside ref={ asideRef } id="sidebar" className={ `bg-white fixed z-[1199] overflow-x-auto top-16 bottom-0 border-r w-48 transition-all` }>
			<div className="relative w-full h-full">
				<nav className="flexs flex-coll w-full h-full">
					<div className="flex flex-col justify-between min-h-full overflow-auto">
						{/* Sidebar header */ }
						<header className="flex flex-shrink-0 items-center sticky top-0 h-14 z-[1] border-b bg-white">
							<div className="px-6 font-medium">
								<Link href={ `/${tid}` }>Home</Link>
							</div>
						</header>

						{/* Sidebar main */ }
						<div className="w-full relative pt-2 pb-8 bg-white">
							<ul className="w-full">
								{ items.map((item) => (
									<SidebarItem key={ item.href } label={ item.label } href={ `/${tid}/${item.href}` } />
								)) }
								<SidebarItem label="Whoami" href="/whoami" />
							</ul>
						</div>

						{/* Sidebar footer */ }
						<footer className="block w-full flex-shrink-0 sticky bottom-0 mt-auto z-[1] bg-white">

						</footer>
					</div>
				</nav>
			</div>
		</aside>
	);
}

const SidebarItem = ({ label, href }: { label: string; href: string; }) => {
	return (
		<li className="text-[14px] font-medium">
			<Link href={ href } className="flex flex-grow items-center ml-6 h-10">
				<div className="">{ label }</div>
			</Link>
		</li>
	);
}