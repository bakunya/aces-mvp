import plans from "@/lib/plans";
import Plan from "./components/plan";

export default async function Page({ params }: any) {
	console.log(params)
	return (
		<div className="aces-new-project">
			<h1 className="text-2xl text-slate-700 font-bold mb-6">Create Project</h1>
			<div className="bg-white">
				{ plans.map((v, i) => <Plan key={i} plan={ v } />) }
			</div>
		</div>
	);
}
