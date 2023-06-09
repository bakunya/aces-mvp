export default function getSuccessResponseCode(method: string) {
    if(method?.toUpperCase() === 'GET') return 200
    return 201
}