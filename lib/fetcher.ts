import { getCookieHeaders } from "./cookies";
import { apiURL } from "./utils";

const types: Record<string, string> = {
	client: 'clients',
	persona: 'personae',
	project: 'projects',
	user: 'users',
}

export async function getMany(type: string) {
	// Check type
	if (!types[type]) throw Error("Invalid type");

	const url = apiURL(types[type]);
	const headers = getCookieHeaders();
	const rs = await fetch(url, headers);

	if (rs.ok) {
		const json = await rs.json();
		return json;
	}

	// TODO error handling

	return [];
}

export async function getSingle(type: string, id: string) {
	// Check type
	if (!types[type]) throw Error("Invalid type");

	const url = apiURL(`/${types[type]}/${id}`);
	const headers = getCookieHeaders();
	const rs = await fetch(url, headers);

	if (rs.ok) {
		const json = await rs.json();
		return json;
	}

	// TODO error handling

	return null;
}