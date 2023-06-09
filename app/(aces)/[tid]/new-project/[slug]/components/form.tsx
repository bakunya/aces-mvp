"use client"
import postProject from '@/adapters/postProject'
import { errorToast, successToast } from '@/lib/runToast'
import { useRouter } from 'next/navigation'
import React from 'react'
import { uid } from 'uid'

const Form = ({ tid, type }: { tid: string, type: string }) => {
	const [l, sl] = React.useState(false)
	const r = useRouter()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		sl(true)

		const formData = new FormData(e.currentTarget)
		const title = formData.get('title') as string
		if (!title) return
		const dataToSend = {
			tid,
			type,
			title,
			description: '',
			slug: `${title.toLowerCase().replace(/\s/g, '-')}-${uid(5)}`,
		}

		postProject(dataToSend, {
			onError: errorToast,
			onSuccess: () => {
				r.refresh()
				successToast('Project created successfully!')
			}
		}).finally(() => sl(false))
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				autoComplete='off'
				required
				autoFocus
				id="title"
				type="text"
				name="title"
				className="text-md w-full rounded-md border-0 p-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
				placeholder="Project Name"
			/>
			<button disabled={ l } className="ml-auto mt-5 px-12 py-3 text-md block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
		</form>
	)
}

export default Form