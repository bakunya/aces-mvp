import Api from "./Api";

export default async function postProject(data: any, cb?: { onSuccess?: Function, onError?: Function}) {
	const api = new Api();

	api.body = data;
	api.method = 'POST';
	api.headers = {
		'credentials': 'include',
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'X-URL-Forward': '/projects',
	}

	try {
		const rs = await api.hit("/api/v1/fetch");
	 	if(cb?.onSuccess instanceof Function) cb?.onSuccess(rs);
	} catch (error) {
		if(cb?.onError instanceof Function) cb?.onError(error);
	}
}