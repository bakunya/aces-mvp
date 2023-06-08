import FormCreate from "./components/form-create";

export default async function Page({ params }: TenantProps) {	
	return (
		<div className="aces-users">
			<header className="bg-white">
				<nav className="mx-auto flex max-w-7xl items-center justify-between" aria-label="Global">
					<div className="flex lg:flex-1">
						<h1 className="text-2xl text-slate-700 font-bold mb-6">Create New User</h1>
					</div>
				</nav>
			</header>
			<div className="mt-12">
				<FormCreate />
			</div>
		</div>
	);
}
