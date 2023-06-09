import { match, P } from 'ts-pattern'
import { toast } from "react-toastify";

export const successToast = (message?: string) => toast.success(message ?? 'Action success!', {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
})

export const errorToast = (message?: string) => toast.error(match(message).with(P.string, r => r).otherwise(() => 'Something wrong!'), {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
})
