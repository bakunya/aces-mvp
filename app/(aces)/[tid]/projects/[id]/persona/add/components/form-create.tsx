"use client"
import TextField from '@/components/text-field';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'

export type PersonCreate = {
	fullname: string;
	username?: string;
	phone?: string;
	tgl_lahir?: string;
	nip?: string;
	position?: string;
	c_level?: string;
	t_level?: string;
};

export const labels = [
	{
		name: "username",
		placeholder: "andreas",
		autoComplete: "username",
		label: "Username",
		type: "text"
	},
	{
		name: "position",
		placeholder: "Manager",
		autoComplete: "position",
		label: "Position",
		type: "text"
	},
	{
		name: "nip",
		placeholder: "000 XXX",
		autoComplete: "nip",
		label: "NIP",
		type: "text"
	},
	{
		name: "tgl_lahir",
		placeholder: "",
		autoComplete: "tgl_lahir",
		label: "Date of birth",
		type: "date"
	},
	{
		name: "phone",
		placeholder: "+62 XXX",
		autoComplete: "phone",
		label: "Phone number",
		type: "text"
	},
	{
		name: "c_level",
		placeholder: "XXX",
		autoComplete: "c_level",
		label: "C level",
		type: "text"
	},
	{
		name: "t_level",
		placeholder: "XXX",
		autoComplete: "t_level",
		label: "T level",
		type: "text"
	},
]

const FormCreate = ({ defaultValues }: { defaultValues?: PersonCreate }) => {
	const validationSchema = z.object({
		fullname: z.string().min(3).max(20).trim(),
		nip: z.string().nullable(),
		phone: z.string().nullable(),
		c_level: z.string().nullable(),
		t_level: z.string().nullable(),
		username: z.string().nullable(),
		position: z.string().nullable(),
		tgl_lahir: z.string().nullable(),
	});

	const { control, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		resolver: zodResolver(validationSchema),
		defaultValues: defaultValues ?? {
			fullname: "",
			nip: "",
			phone: "",
			c_level: "",
			t_level: "",
			position: "",
			tgl_lahir: "",
			username: "",
		},
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
								Full name <span className="text-red-600">*</span>
							</label>
							<div className="mt-2">
								<TextField
									control={ control }
									error={ errors.fullname?.message }
									inputProps={ {
										autoComplete: "fullname",
										placeholder: "janesmith",
										name: "fullname",
									} }
								/>
							</div>
						</div>
						{ labels.map((v, i) => (
							<div className="sm:col-span-4" key={ i }>
								<label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
									{ v.label }
								</label>
								<div className="mt-2">
									<TextField
										control={ control }
										// @ts-ignore
										error={ errors[v.name]?.message }
										inputProps={ {
											autoComplete: v.autoComplete,
											placeholder: v.placeholder,
											name: v.name,
											type: v.type
										} }
									/>
								</div>
							</div>
						)) }
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