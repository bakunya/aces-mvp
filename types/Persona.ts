export default interface Persona {
	id: string;
	pid: string;
	ref_ids: string | string[];
	tests: string | string[];
	fullname: string;
	username: string;
	phone: string;
	tgl_lahir: string;
	nip: string;
	position: string;
	c_level: string;
	t_level: string;
	created: string;
	updated: string;
	tid: string;
	cid: string;
	slug: string;
	hash: string;
	org_name: string;
	client_org_name: string;
}
