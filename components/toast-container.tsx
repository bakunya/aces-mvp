"use client"
import { ToastContainer as ToastContainerCore } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer = () => {
	return (
		<ToastContainerCore
			position="top-right"
			autoClose={ 5000 }
			hideProgressBar={ false }
			newestOnTop={ false }
			closeOnClick
			rtl={ false }
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
	)
}

export default ToastContainer