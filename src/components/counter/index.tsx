import { useEffect, useRef } from 'react'

import { useTimer, TimerResult } from 'react-timer-hook'
import { intervalToDuration } from 'date-fns'

import { useForceUpdate } from '../../hooks'
import * as S from './styles'

type Interval = {
  time?: number
  label: string
}

type CounterProps = {
  dateCreated: string
  dateStart: string
  onFinishCounter: () => void
}

const intervalsToUse: (keyof Duration)[] = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
const intervalsCount = 3

const Counter = ({ dateCreated, dateStart, onFinishCounter }: CounterProps) => {
  const startDate = new Date(dateStart).getTime()
  const createdDate = new Date(dateCreated).getTime()

  const now = new Date().getTime()
  const expiryTimestamp = new Date()

  expiryTimestamp.setMilliseconds(expiryTimestamp.getMilliseconds() + startDate - now)

  const counter = useTimer({ expiryTimestamp, autoStart: false, onExpire: onFinishCounter })
  const { forceUpdate } = useForceUpdate()

  const hasSecondsRef = useRef(false)
  const alreadyGetIntervalsRef = useRef(false)

  const getProgress = () => {
    const elapsedTime = now - createdDate
    const totalIntervalTimeToEvent = startDate - createdDate

    const progress = elapsedTime * 100 / totalIntervalTimeToEvent
    return progress
  }

  const getIntervals = (): Interval[] => {
    if (hasSecondsRef.current) {
      const lastThreeIntervals = [...intervalsToUse].slice(-intervalsCount)

      return lastThreeIntervals.map(interval => ({ label: interval }))
    }

    const times = intervalToDuration({
      start: now,
      end: startDate
    })

    const timesMap = intervalsToUse.map(interval => ({
      time: times[interval]!,
      label: interval
    }))

    const indexToStart = timesMap.findIndex(item => !!item.time)
    const intervals = timesMap.slice(indexToStart, indexToStart + intervalsCount)

    const hasSecond = intervals.some(interval => !!interval.label.match('second'))

    alreadyGetIntervalsRef.current = true
    hasSecondsRef.current = hasSecond

    return intervals
  }

  useEffect(() => {
    forceUpdate()
  }, [])

  if (!counter.isRunning && alreadyGetIntervalsRef.current && hasSecondsRef.current) counter.start()

  const progress = getProgress()
  const intervals = getIntervals()

  return (
    <S.Container>
      <S.Counter>
        {intervals.map(({ time, label }) => {
          const display = hasSecondsRef.current ? counter[label as keyof TimerResult] : time

          return (
          <S.Wrapper key={label}>
            <S.Time>{`0${display}`.slice(-2)}</S.Time>
            <S.Label>{label}</S.Label>
          </S.Wrapper>
        )})}
      </S.Counter>

      <S.ProgressBar>
        <S.Progress progress={progress} />
      </S.ProgressBar>
    </S.Container>
  )
}

export { Counter }
