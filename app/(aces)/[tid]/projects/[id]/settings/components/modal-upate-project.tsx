"use client"
import Modal from '@/components/modal'
import { match } from 'ts-pattern'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextField, { InputProps } from '@/components/text-field'
import IconButton from '@/components/icon-button'

const Form = ({ closeModal, defaultValue, inputProps }: { inputProps: InputProps, closeModal: Function, defaultValue: Object }) => {
	const validationSchema = match(Object.keys(defaultValue)[0])
		.with("title", () => z.object({ title: z.string().min(3).max(20).trim() }))
		.with("description", () => z.object({ description: z.string().min(3).max(50).trim() }))
		.otherwise(() => z.object({}))

	const { control, handleSubmit, formState: { errors } } = useForm({
		mode: "all",
		resolver: zodResolver(validationSchema),
		defaultValues: defaultValue
	})

	const onSubmit = handleSubmit(data => {
		console.log(data)

		setTimeout(() => {
			closeModal()
		}, 1000);
	})

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


const ModalUpdateProject = ({ dataToUpdate, title, inputProps }: { inputProps: InputProps, title: string, dataToUpdate: any }) => {
	return <Modal
		Title={ <h3 className="text-md font-medium leading-6 text-gray-900 capitalize">{ title }</h3> }
		Content={ (props: any) => <Form { ...props } defaultValue={ dataToUpdate } inputProps={ inputProps } />}
		Button={ (props: any) => <IconButton  buttonProps={{ onClick: props.openModal, className: "ml-3" }} /> }
	/>
}

export default ModalUpdateProject