"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField from '@/components/text-field'

const FormCreate = () => {
	const validationSchema = z.object({
		email: z.string().email().trim(),
		username: z.string().min(3).max(20).trim(),
		fullname: z.string().min(0).max(20).trim(),
	})

	const { control, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		resolver: zodResolver(validationSchema),
		defaultValues: {
			email: "",
			username: "",
			fullname: ""
		}
	})

	const onSubmit = handleSubmit(data => {
		console.log(data)
	})

	return (
		<form onSubmit={ onSubmit }>
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
								Username <span className="text-red-600">*</span>
							</label>
							<div className="mt-2">
								<TextField 
									control={ control }
									error={errors.username?.message}
									inputProps={{
										autoComplete: "username",
										placeholder: "janesmith",
										name: "username",
									}}
								/>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
								Email <span className="text-red-600">*</span>
							</label>
							<div className="mt-2">
								<TextField 
									control={ control }
									error={errors.email?.message}
									inputProps={{
										autoComplete: "email",
										placeholder: "janesmith@mail.co.id",
										name: "email",
									}}
								/>
							</div>
						</div>
						<div className="sm:col-span-4">
							<label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
								Full name
							</label>
							<div className="mt-2">
								<TextField 
									control={ control }
									error={errors.fullname?.message}
									inputProps={{
										autoComplete: "fullname",
										placeholder: "janesmith andreas",
										name: "fullname",
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-gray-900">
					Cancel
				</button>
				<button
					type="submit"
					className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>
	)
}

export default FormCreate