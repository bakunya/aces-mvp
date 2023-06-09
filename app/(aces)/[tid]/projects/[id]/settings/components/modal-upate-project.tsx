"use client"
import Modal from '@/components/modal'
import { match } from 'ts-pattern'
import React, { useEffect } from 'react'
import { z } from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField, { InputProps } from '@/components/text-field'
import IconButton from '@/components/icon-button'

const useSubmit = (handleSubmit: Function, closeModal: Function) => {
	return handleSubmit((data: any) => {
		console.log(data)

		setTimeout(() => {
			closeModal()
		}, 1000);
	})
}

const Form = ({ closeModal, defaultValue, inputProps }: { inputProps: InputProps, closeModal: Function, defaultValue: Object }) => {
	const validationSchema = match(Object.keys(defaultValue)[0])
		.with("title", () => z.object({ title: z.string().min(3).max(30).trim() }))
		.with("description", () => z.object({ description: z.string().min(3).max(50).trim() }))
		.otherwise(() => z.object({}))

	const { control, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		resolver: zodResolver(validationSchema),
		defaultValues: defaultValue,
		
	})

	const onSubmit = useSubmit(handleSubmit, closeModal)

	return (
		<form className="flex flex-col" onSubmit={ onSubmit }>
			<div className="mt-5">
				<div className="pb-5 border-b border-gray-900/10">
					<TextField
						control={ control }
						// @ts-ignore
						error={ errors[Object.keys(defaultValue)[0]]?.message as string | undefined }
						inputProps={ inputProps as any }
					/>
				</div>
			</div>
			<button
				type='submit'
				className='mt-4 ml-auto block w-fit rounded-md bg-indigo-600 px-7 py-2 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
			>
				Save
			</button>
		</form>
	)
}

const FormSlug = ({ closeModal, defaultValue, inputProps }: { inputProps: InputProps, closeModal: Function, defaultValue: Object }) => {
	const validationSchema = z.object({ slug: z.string().min(3).max(50).trim().transform(v => v.replace(/\s/g, '-')) })

	const { control, setValue, register, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		resolver: zodResolver(validationSchema),
		defaultValues: defaultValue,
	})

	const onSubmit = useSubmit(handleSubmit, closeModal)

	const v = useWatch({ control, name: Object.keys(defaultValue)[0] as any })
	useEffect(() => { setValue(Object.keys(defaultValue)[0] as any, v.replace(/\s/g, '-')) }, [v])

	return (
		<form className="flex flex-col" onSubmit={ onSubmit }>
			<div className="mt-5">
				<div className="pb-5 border-b border-gray-900/10">
					<TextField
						control={ control }
						// @ts-ignore
						error={ errors[Object.keys(defaultValue)[0]]?.message as string | undefined }
						inputProps={ { ...(inputProps as any), ...register("slug" as any) } as any }
					/>
				</div>
			</div>
			<button
				type='submit'
				className='mt-4 ml-auto block w-fit rounded-md bg-indigo-600 px-7 py-2 text-center text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
			>
				Save
			</button>
		</form>
	)
}


const ModalUpdateProject = ({ dataToUpdate, title, inputProps }: { inputProps: InputProps, title: string, dataToUpdate: any }) => {
	return <Modal
		Title={ <h3 className="text-md font-medium leading-6 text-gray-900 capitalize">{ title }</h3> }
		Content={ (props: any) => match(Object.keys(dataToUpdate)[0])
			.with("slug", () => <FormSlug { ...props } inputProps={ inputProps } defaultValue={ dataToUpdate } />)
			.otherwise(() => <Form { ...props } inputProps={ inputProps } defaultValue={ dataToUpdate } />)}
		Button={ (props: any) => <IconButton  buttonProps={{ onClick: props.openModal, className: "ml-3" }} /> }
	/>
}

export default ModalUpdateProject