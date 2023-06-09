import { match, P } from 'ts-pattern'

export default class Api {
    body: any
    method: string | undefined
    headers: any
    
    constructor() {
        this.body = {}
        this.headers = null
        this.method = 'GET'
    }

    async hit(url: string, signal: any = null) {
        try {
            this.setBody()
            
            const raw = await fetch(url, {
				method: this.method,
                headers: this.headers,
                ...(signal ? { signal } : {}),               
                ...(this.method?.toUpperCase() === 'GET' ? {} : { body: this.body }),
            })
            
            if(!raw.ok) return Promise.reject(raw.statusText)
            const res = await raw.json()
            
            if(res.status === 'error') {
                if(res.message) return Promise.reject(res.message)
                return Promise.reject('Something went wrong')
            }
    
            return Promise.resolve(res)
        } catch(er: any) {
            return Promise.reject(er?.message)
        }
    }

    setBody() {
		match(this.body)
			.with(P.instanceOf(FormData), () => this.body = this.body as FormData)
			.with(P.instanceOf(Object), () => this.body = JSON.stringify(this.body))
			.with(P.string, () => this.body = this.body)
			.otherwise(() => this.body = JSON.stringify(this.body))
    }
}