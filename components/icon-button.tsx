import { PencilSquareIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';
import React, { FocusEvent, KeyboardEvent, MouseEvent, TouchEvent } from 'react'

type ButtonHTMLProps = {
	autoFocus?: boolean;
	disabled?: boolean;
	form?: string;
	formAction?: string;
	formEncType?: string;
	formMethod?: string;
	formNoValidate?: boolean;
	formTarget?: string;
	name?: string;
	className?: string;
	type?: "submit" | "reset" | "button";
	value?: string | string[] | number;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
	onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
	onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
	onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
	onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void;
	onMouseOut?: (event: MouseEvent<HTMLButtonElement>) => void;
	onTouchStart?: (event: TouchEvent<HTMLButtonElement>) => void;
	onTouchMove?: (event: TouchEvent<HTMLButtonElement>) => void;
	onTouchEnd?: (event: TouchEvent<HTMLButtonElement>) => void;
	onTouchCancel?: (event: TouchEvent<HTMLButtonElement>) => void;
	onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
	onKeyUp?: (event: KeyboardEvent<HTMLButtonElement>) => void;
	onKeyPress?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  };
  

const IconButton = ({ buttonProps, overrideClassName, Icon, iconProps }: { iconProps?: Object, Icon?:  React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref">>, overrideClassName?: boolean, buttonProps?: ButtonHTMLProps }) => {
	return (
		<button
			{ ...{ 
				...buttonProps, 
				className: overrideClassName 
					? buttonProps?.className 
					: clsx(
						Array.from(new Set([
							"text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition-colors duration-200".split(" "), 
							buttonProps?.className?.split(" ")
						]))
					),
			} }
		>
			<span className="sr-only"> Download </span>
			{Icon ? <Icon className='h-5 w-5' { ...iconProps } /> : <PencilSquareIcon className="h-5 w-5" { ...iconProps } />}
		</button>
	)
}

export default IconButton