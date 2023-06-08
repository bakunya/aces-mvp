import ChangeDom from '@/components/change-dom'
import SubHeader from '@/components/sub-header'
import React from 'react'
import Checkbox from './components/checkbox'
import ModalDetail from './components/modal-detail'

const page = () => {
	return (
		<div className="aces-project-modules">
			<SubHeader title='Add Modules' />
			<ChangeDom elements={ [{ id: 'path-tabs-settings', removeClassName: 'hidden' }] } />
			<div className="overflow-x-auto mt-10">
				<table className="min-w-full bg-white text-sm">
					<tbody className="">
						<tr className='border-b border-gray-200'>
							<td colSpan={ 2 } className='px-4 py-3 font-semibold capitalize'>lorem</td>
						</tr>
						<tr>
							<td className="px-4 py-3 w-[50px]">
								<Checkbox id="john-doe" title='John Doe' checked readonly />
							</td>
							<td className="whitespace-nowrap px-4 py-3 font-medium text-gray-900">
								<div className="flex items-center">
									John Doe <ModalDetail detail='lorem ipsum dolor silit' title='John Doe' />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default page