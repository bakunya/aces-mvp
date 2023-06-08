"use client"
import React from 'react'
import LinkC from "next/link"
import { usePathname } from 'next/navigation'

const Link = ({ path }: { path: string }) => {
	const r = usePathname()

	return (
		<LinkC href={`${r}/${path}`} className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</LinkC>
	)
}

export default Link