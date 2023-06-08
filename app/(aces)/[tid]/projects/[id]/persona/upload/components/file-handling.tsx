"use client"
import { ArrowUpTrayIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'
import React, { ChangeEvent } from 'react'
import CSVPreview, { PersonCSV } from './csv-preview'
import { match } from 'ts-pattern'
import Papa from "papaparse"
import clsx from 'clsx'

function readFile(file: any): Promise<any> {
	return new Promise((res, rej) => {
		Papa.parse(file, {
			header: true,
			complete: function (results) {
				res(results.data)
			},
			error: function (err) {
				rej(err)
			}
		});
	})
}

const FileHandling = () => {
	const [c, sc] = React.useState<PersonCSV[] | null>(null)
	const [load, SLoad] = React.useState<boolean>(false)
	const [onDrag, SOnDrag] = React.useState<boolean>(false)

	const handleChange = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (load) return
		if (!e.currentTarget.files) return
		SLoad(true)
		const file = e.currentTarget.files[0]
		if (!file) return
		readFile(file).then(r => sc(r)).finally(() => SLoad(false))
	}, [sc, SLoad, load])

	const handleDrop = (e: any) => {
		e.preventDefault()
		if (load) return
		if (!e.dataTransfer.files) return
		SLoad(true)
		const file = e.dataTransfer.files[0]
		if (!file) return
		readFile(file).then(r => sc(r))
			.finally(() => {
				SLoad(false)
				SOnDrag(false)
			})
	}

	const handleDragOver = (e: any) => {
		e.preventDefault()
		SOnDrag(true)
	}

	const handleDragExit = (e: any) => {
		e.preventDefault()
		SOnDrag(false)
	}
	

	return (
		<>
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="col-span-full">
							<label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
								Select CSV
							</label>
							<div 
								className={clsx(
									"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10",
									{ "border-indigo-600": onDrag },
								)} 
								onDrop={ handleDrop } 
								onDragOver={ handleDragOver }
								onDragExit={ handleDragExit }
							>
								<div className="text-center">
									<DocumentPlusIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="csv"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input onChange={ handleChange } type="file" name="csv" accept='.csv' id="csv" className="sr-only" />
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex flex-col items-start justify-start gap-x-6">
				{ match(!!c)
					.with(true, _ => (
						<>
							<div className="flex justify-between items-center  mt-4 w-full mb-8">
								<p className="block text-sm font-medium leading-6 text-gray-900">
									Preview Your CSV Data
								</p>
								<button
									className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									<ArrowUpTrayIcon className="-ml-0.5 h-5 w-5 text-white" aria-hidden="true" />
									<span className='ml-1.5 hidden sm:block'>Upload Data</span>
								</button>
							</div>
							<CSVPreview data={ c as PersonCSV[] } />
						</>
					))
					.otherwise(_ => null) }
			</div>
		</>
	)
}

export default FileHandling