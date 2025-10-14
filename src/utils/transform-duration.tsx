import dayjs from 'dayjs'

export const transformDuration = (duration: number) => dayjs.unix(duration).format('m:ss')