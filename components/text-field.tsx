import clsx from 'clsx'
import React from 'react'
import { Controller } from 'react-hook-form'
import { match } from 'ts-pattern'

export interface InputProps {
	autoComplete: string;
	placeholder: string;
	name: string;
	type?: string
}

export interface TFTypes {
	control: any;
	error: string | undefined;
	inputProps: InputProps;
}

const TextField = ({ control, error, inputProps }: TFTypes) => {
	return (
		<Controller
			render={ ({ field }) => (
				<>
					<div
						className={ clsx(
							"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md",
							error ? "ring-red-600" : "ring-gray-300 focus-within:ring-indigo-600 "
						) }
					>
						{ match(inputProps?.type)
							.with("textarea", _ => (								
								<textarea
									{ ...field }
									{ ...inputProps }
									className="block flex-1 border-0 bg-transparent px-4 py-1.5 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								/>
							))
							.otherwise(() => (
								<input
									{ ...field }
									{ ...inputProps }
									className="block flex-1 border-0 bg-transparent px-4 py-1.5 text-gray-900 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
								/>
							)) }
					</div>
					{ error && <span className='mt-3 text-xs text-red-600 ml-1'>{ error }</span> }
				</>
			) }
			name={ inputProps.name }
			control={ control }
		/>
	)
}

export default TextField