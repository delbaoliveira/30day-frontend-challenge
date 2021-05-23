import React from "react"
import { useTimer } from "react-timer-hook"

const Timer = () => {
  const expiryTimestamp = new Date("May 24, 2021 24:00:00")
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds())

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: true,
  })

  return (
    <div className="polka-bg bg-black font-mono text-center h-full rounded-b-lg flex flex-col justify-center ">
      <div className="md:text-7xl text-4xl text-white font-medium">
        <span>
          {days < 10 ? `0` : ""}
          {days}
        </span>
        :
        <span>
          {hours < 10 ? `0` : ""}
          {hours}
        </span>
        :
        <span>
          {minutes < 10 ? `0` : ""}
          {minutes}
        </span>
        :
        <span>
          {seconds < 10 ? `0` : ""}
          {seconds}
        </span>
      </div>
      <p className="text-gray-400 mt-2">Until the challenge starts</p>
    </div>
  )
}

export default Timer
