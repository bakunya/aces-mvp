// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Api from '@/adapters/Api';
import { apiURL } from '@/lib/utils';
import { sessionOptions } from '@/lib/session';
import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next';
import getSuccessResponseCode from '@/lib/getSuccessResponseCode';

export default withIronSessionApiRoute(handler, sessionOptions);

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if(!process.env.COOKIE_NAME) return res.json({ status: 'error', message: 'Cookie name not found' })
	if(!req.headers['x-url-forward']) return res.json({ status: 'error', message: 'URL forward not found' })

    const api = new Api();
	api.method = req.method ?? 'GET'
	api.body = api.method.toUpperCase() !== 'GET' ? req.body : null
    api.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'credentials': 'include',
		"x-aces-auth": `${req.cookies[process.env.COOKIE_NAME]}`,
    }
    
    try {
        const data = await api.hit(apiURL((req.headers['x-url-forward'] ?? '') as string), null)
        return res.status(getSuccessResponseCode(req?.method?.toUpperCase() ?? 'GET')).json(req?.method?.toUpperCase() === 'GET' ? data : { status: 'success' })
    } catch (er: any) {
		console.log(er, er.stack)
        return res.status(500).json({ 
            status: 'error', 
            message: er.message,
            ...(process.env.NODE_ENV === 'development' ? { stack: er.stack } : {})
        })
    }
}
