export default function isTenantAdmin(uid: string, tid: string): boolean {
	console.log(uid.trim(), tid.trim())
	return uid.trim() === tid.trim();
}