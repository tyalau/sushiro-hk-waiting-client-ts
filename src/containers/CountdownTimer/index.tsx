import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setResetTimer } from '../../reducers/storeMap'
import { useGetStoreListQuerySubscription } from '../../service/api/store'
import formatTime from '../../utils/formatTime'

interface CountdownTimerProps {
  duration?: number
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration = 60 }) => {
  const [timer, setTimer] = useState(duration)
  const { resetTimer } = useSelector((state: StoreState) => state.storeMap)
  const dispatch = useDispatch()
  const { refetch } = useGetStoreListQuerySubscription()

  useEffect(() => {
    if (resetTimer) {
      setTimer(duration)
      dispatch(setResetTimer(false))
    }
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1)
      } else if (timer === 0) {
        refetch()
        setTimer(duration)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  return <div className="text-primary">{formatTime(timer)}</div>
}

export default CountdownTimer
