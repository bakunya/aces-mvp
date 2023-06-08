import ChangeDOM from "@/components/change-dom";
import FormCreate from "./components/form-create";
import SubHeader from "@/components/sub-header";

export default async function Page() {
	return (
		<div className="aces-project-persona add">
			<SubHeader title="New Persona" />
			<ChangeDOM elements={ [{ id: 'path-tabs-persona', removeClassName: 'hidden' }] } />
			<FormCreate />
		</div>
	);
}