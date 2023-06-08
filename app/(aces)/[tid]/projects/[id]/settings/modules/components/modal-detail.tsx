"use client"
import IconButton from '@/components/icon-button'
import Modal from '@/components/modal'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ModalDetail = ({ title, detail }: { title: string, detail: string }) => {
	return (
		<>
			<Modal 
				Title={ title }
				Content={({ closeModal }: any) => (
					<div className='mt-4 pt-4 border-t border-gray-200'>
						<p className='text-sm text-gray-500'>{ detail }</p>
						<div className='mt-4 flex justify-end'>
							<button onClick={ closeModal } className='px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'>Close</button>
						</div>
					</div>
				)}
				Button={({ openModal }: any) => <IconButton buttonProps={ { className: 'ml-2', onClick: openModal } } iconProps={ { type: 'outline' } } Icon={ QuestionMarkCircleIcon } />} 
			/>
		</>
	)
}

export default ModalDetail