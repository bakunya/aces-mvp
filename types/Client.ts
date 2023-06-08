export default interface Client {
	id: string;
	tid: string;
	org_name: string;
	short_name: string | null;
	created: string;
	updated: string | null;
}
