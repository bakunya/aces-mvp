import React from 'react'

const Checkbox = ({ id, title, checked, readonly }: { id: string, title: string, checked: boolean, readonly: boolean }) => {
	return (
		<>
			<label className="sr-only cursor-pointer" htmlFor={id}>{title}</label>
			<input
				className="h-5 w-5 rounded border-gray-300 cursor-pointer"
				type="checkbox"
				id={id}
				name={id}
				checked={checked}
				readOnly={readonly}
			/>
		</>
	)
}

export default Checkbox