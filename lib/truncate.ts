export default function truncate(str: string, length: number = 25, ending: string = '...') {
	return str.length > length ? str.substring(0, length - ending.length) + ending : str;
}