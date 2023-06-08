import { default as dayjs } from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

export default function formatDay(day: string, format: string = "LL") {
	dayjs.extend(localizedFormat)
	return dayjs(day).format(format)	
}