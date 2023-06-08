export default interface Project {
	id: string;
	admin_id: string;
	tid: string;
	cid: string;
	slug: string;
	type: string;
	title: string;
	description: string;
	modules: string | string[];
	criteria: string | string[];
	start_date: string;
	end_date: string;
	contract_date: string;
	contract_value: number;
	invoice_date: string;
	report_lang: string;
	client_contract_date: string;
	client_invoice_date: string;
	contact_name: string;
	contact_phone: string;
	contact_email: string;
	created: string;
	updated: string | null;
}
