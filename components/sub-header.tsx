import Link from 'next/link'
import React from 'react'
import { match, P } from 'ts-pattern'

const SubHeader = ({ title, href, linkLabel }: { title: string, href?: string, linkLabel?: string }) => {
	return (
		<header className="bg-white">
			<nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
				<div className="flex lg:flex-1">
					<h1 className="text-2xl text-slate-700 font-bold mb-6">{ title }</h1>
				</div>
				{ match([href, linkLabel])
					.with([P.string, P.string], ([href, linkLabel]) => (
						<span className="sm:ml-3">
							<Link
								href={ href }
								className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{ linkLabel }
							</Link>
						</span>
					))
					.otherwise(() => null) }
			</nav>
		</header>
	)
}

export default SubHeader