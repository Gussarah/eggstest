import type { FC } from 'react'
import { useSelector } from 'react-redux'

import { lastUpdateSelector } from '@/eggs/clock/selectors'

const pad = (n: number): string => (n < 10 ? `0${n}` : `${n}`)

const format = (t: Date): string => {
  const hours = t.getUTCHours()
  const minutes = t.getUTCMinutes()
  const seconds = t.getUTCSeconds()

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const Clock: FC = () => {
  const lastUpdate = useSelector(lastUpdateSelector)

  return <p>{format(new Date(lastUpdate))}</p>
}

export { Clock }
