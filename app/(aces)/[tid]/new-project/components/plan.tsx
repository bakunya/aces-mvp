import Link from "./link"

const Plan = ({ plan }: { plan: { name: string, id: string } }) => {
	return (
		<div className="mx-auto mt-14 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
			<div className="p-8 sm:p-10 lg:flex-auto">
				<h3 className="text-2xl font-bold tracking-tight text-gray-900">{ plan.name }</h3>
				<p className="mt-6 text-base leading-7 text-gray-600">
					Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
					repellendus etur quidem assumenda.
				</p>
			</div>
			<div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
				<div className="rounded-2xl bg-gray-50 py-8 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
					<div className="mx-auto max-w-xs px-8">
						<p className="mt-6 flex items-baseline justify-center gap-x-2">
							<span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
							<span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
						</p>
						<Link path={plan.id} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Plan