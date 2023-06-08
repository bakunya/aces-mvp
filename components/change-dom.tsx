"use client"
import React, { useEffect } from 'react'
import { memo } from 'react'

/**
 * @param elements Array of objects with id, className and removeClassName.
 * @returns
*/
type E = { id: string, removeClassName?: string, className?: string }[]

const mainFunc = (elements: E) => {
	return new Promise((res, rej) => {
		elements.forEach(e => {
			const el = document.getElementById(e.id)
			if (!el) return rej(`Element with id ${e.id} not found.`)
			if (e.removeClassName) el.classList.remove(e.removeClassName)
			if (e.className) el.classList.add(e.className)
		})
		res(true)
	})
}

const cleanFunc = (elements: E) => {
	return new Promise((res, rej) => {
		elements.forEach(e => {
			const el = document.getElementById(e.id)
			if (!el) return rej(`Element with id ${e.id} not found.`)
			if (e.removeClassName) el.classList.add(e.removeClassName)
			if (e.className) el.classList.remove(e.className)
		})
		res(true)
	})
}

const ChangeDOM = ({ elements }: { elements: E}) => {

	useEffect(() => {
		console.warn("Use ChangeDOM only when you know what you're doing (ex. in SSR).")

		mainFunc(elements).catch(console.error)

		return () => {
			cleanFunc(elements).catch(console.error)
		}

	}, [elements])

	return <></>
}

export default memo(ChangeDOM)